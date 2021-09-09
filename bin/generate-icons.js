const { camelCase, startCase, difference } = require('lodash');
const svgr = require('@svgr/core').default;
const { readdirSync, writeFileSync, readFileSync, unlinkSync, watch: watchDir, existsSync } = require('fs');
const { join, resolve } = require('path');

const COMP_EXT = '.tsx';
const ASSET_EXT = '.svg';

const getFileNamesInDir = (dirPath, extension) => {
  const fileNames = readdirSync(dirPath);
  return fileNames.filter((fileName) => fileName.endsWith(extension));
};

const stripExtension = (fileName) => fileName.replace(/\..+/, '');

const getFullPath = (parts) => join(...parts);

const withExtension = (fileName, extension) => `${fileName}.${extension.replace(/^\./, '')}`;

const writeFile = (fullPath, contents) => {
  writeFileSync(fullPath, contents, 'utf-8');
};

const getFileContents = (fullPath) => {
  if (existsSync(fullPath)) {
    return readFileSync(fullPath, 'utf-8');
  }
  return '';
}

const assetNameToCompName = (filename) => startCase(camelCase(stripExtension(filename))).replace(/ /g, '');

// for removing components no longer supported by an svg asset (from deleting asset or renaming)
const findStaleComps = (currComps, nextComps) => {
  return difference(currComps, nextComps);
};

const removeStaleComps = (compNames, fromDir) => {
  compNames.forEach((compName) => {
    unlinkSync(join(fromDir, withExtension(compName, COMP_EXT)));
  });
};

// const generateStoryFile = (compNames, fromDir): void => {
//   // import all icons and inject into a story for display
// };

const generateCompFile = (assetName, assetDir, componentDir) => {
  const compName = assetNameToCompName(assetName);
  const svgCode = getFileContents(getFullPath([assetDir, assetName]));
  // generate template
  svgr(svgCode, {
    icon: true,
    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx', '@svgr/plugin-prettier'],
    typescript: true,
  }, { componentName: compName })
  .then((output) => {
      // write to file
      const outputPath = getFullPath([componentDir, withExtension(compName, COMP_EXT)]);
      writeFile(outputPath, output);
    });
};

const generateNewComps = (assetNames, assetDir, componentDir) => assetNames.forEach((assetName) => generateCompFile(assetName, assetDir, componentDir));


const generate = (assetDir, componentDir) => {
  const assetNames = getFileNamesInDir(assetDir, ASSET_EXT);
  const currCompNames = getFileNamesInDir(componentDir, COMP_EXT).map(stripExtension);

  const nextCompNames = assetNames.map(assetNameToCompName);
  generateNewComps(assetNames, assetDir, componentDir);

  const staleCompNames = findStaleComps(currCompNames, nextCompNames)
  removeStaleComps(staleCompNames, componentDir);

  // update story
  // generateStoryFile(nextCompNames, componentDir);
};


// running inline for now
const ASSET_DIR = resolve(__dirname, '../src/assets/icons');
const COMPONENT_DIR = resolve(__dirname, '../src/components/icons');

const watch = (assetDir, componentDir) => {
  watchDir(assetDir, () => generate(assetDir, componentDir));
};

if (process.argv[2] === '--watch') {
  watch(ASSET_DIR, COMPONENT_DIR);
} else {
  generate(ASSET_DIR, COMPONENT_DIR);
}
