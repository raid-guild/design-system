const { camelCase, startCase, difference } = require('lodash');
const svgr = require('@svgr/core').default;
const {
  readdirSync,
  writeFileSync,
  readFileSync,
  unlinkSync,
  watch: watchDir,
  existsSync,
} = require('fs');
const { join, resolve } = require('path');

const COMP_EXT = '.tsx';
const ASSET_EXT = '.svg';

const getFileNamesInDir = (dirPath, extension) => {
  const fileNames = readdirSync(dirPath);
  return fileNames.filter((fileName) => fileName.endsWith(extension));
};

const stripExtension = (fileName) => fileName.replace(/\..+/, '');

const getFullPath = (parts) => join(...parts);

const withExtension = (fileName, extension) =>
  `${fileName}.${extension.replace(/^\./, '')}`;

const writeFile = (fullPath, contents) => {
  const output = `\
/**************************************
 ****     AUTO GENERATED FILE     *****
 ****   DO NOT UPDATE MANUALLY    *****
 ***************************************/

${contents}
  `;
  writeFileSync(fullPath, output, 'utf-8');
};

const getFileContents = (fullPath) => {
  if (existsSync(fullPath)) {
    return readFileSync(fullPath, 'utf-8');
  }
  return '';
};

const assetNameToCompName = (filename) =>
  startCase(camelCase(stripExtension(filename))).replace(/ /g, '');

// for removing components no longer supported by an svg asset (from deleting asset or renaming)
const findStaleComps = (currComps, nextComps) => {
  return difference(currComps, nextComps);
};

const removeStaleComps = (compNames, fromDir) => {
  compNames.forEach((compName) => {
    unlinkSync(join(fromDir, withExtension(compName, COMP_EXT)));
  });
};

const generateCompFile = (assetName, assetDir, compDir) => {
  const compName = assetNameToCompName(assetName);
  const svgCode = getFileContents(getFullPath([assetDir, assetName]));
  // generate template
  svgr(
    svgCode,
    {
      icon: true,
      plugins: [
        '@svgr/plugin-svgo',
        '@svgr/plugin-jsx',
        '@svgr/plugin-prettier',
      ],
      typescript: true,
    },
    { componentName: compName }
  ).then((output) => {
    const outputPath = getFullPath([
      compDir,
      withExtension(compName, COMP_EXT),
    ]);
    writeFile(outputPath, output);
  });
};

const generateNewComps = (assetNames, assetDir, compDir) =>
  assetNames.forEach((assetName) =>
    generateCompFile(assetName, assetDir, compDir)
  );

/**
 * generate index.ts to export all generated components
 */
const generateExports = (compNames, compDir) => {
  const output = compNames
    .map(
      (compName) => `export { default as ${compName} } from './${compName}';`
    )
    .join('\n');
  writeFile(getFullPath([compDir, 'index.ts']), output);
};

const generate = (assetDir, compDir) => {
  const assetNames = getFileNamesInDir(assetDir, ASSET_EXT);
  const currCompNames = getFileNamesInDir(compDir, COMP_EXT).map(
    stripExtension
  );

  const nextCompNames = assetNames.map(assetNameToCompName);
  generateNewComps(assetNames, assetDir, compDir);

  const staleCompNames = findStaleComps(currCompNames, nextCompNames);
  removeStaleComps(staleCompNames, compDir);

  generateExports(nextCompNames, compDir);
};

// running inline for now
const ASSET_DIR = resolve(__dirname, '../src/assets/icons');
const COMPONENT_DIR = resolve(__dirname, '../src/components/icons');

const watch = (assetDir, compDir) => {
  watchDir(assetDir, () => generate(assetDir, compDir));
};

if (process.argv[2] === '--watch') {
  watch(ASSET_DIR, COMPONENT_DIR);
} else {
  generate(ASSET_DIR, COMPONENT_DIR);
}
