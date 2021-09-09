const { camelCase, difference } = require('lodash');
const svgr = require('@svgr/core');
const { readdirSync, writeFileSync, readFileSync, unlinkSync, watch: watchDir } = require('fs');
const { join } = require('path');

const COMP_EXT = '.tsx';

const getFileNamesInDir = (dir) => {
  const fileNames = readdirSync(dir);
  return fileNames;
};

const stripExtension = (fileName) => fileName.replace(/\.+./, '');

const getFullPath = (parts) => join(...parts);

const withExtension = (fileName, extension) => `${fileName}.${extension.replace(/^\./, '')}`;

const writeFile = (contents, fullPath) => {
  writeFileSync(contents, fullPath, 'utf-8');
};

const getFileContents = (fullPath) => {
  return readFileSync(fullPath, 'utf-8');
}

const assetNameToCompName = (filename) => camelCase(stripExtension(filename));

// for removing components no longer supported by an svg asset (from deleting asset or renaming)
const findStaleComps = (currComps, nextComps) => {
  return difference(currComps, nextComps);
};

const removeStaleComps = (compNames, fromDir) => {
  compNames.forEach((compName) => {
    unlinkSync(join(fromDir, compName, COMP_EXT));
  });
};

// const generateStoryFile = (compNames, fromDir): void => {
//   // import all icons and inject into a story for display
// };

const generateCompFile = (assetName, fromDir) => {
  const compName = assetNameToCompName(assetName);
  const svgCode = getFileContents(getFullPath([assetName, fromDir]));
  // generate template
  svgr(svgCode, { icon: true }, { componentName: compName })
  .then((output) => {
      // write to file
      writeFile(output, getFullPath([compName, withExtension(compName, 'tsx')]));
    });
};

const generateNewComps = (assetNames, fromDir) => assetNames.forEach((assetName) => generateCompFile(assetName, fromDir));


const generate = (assetDir, componentDir) => {
  const assetNames = getFileNamesInDir(assetDir);
  const currCompNames = getFileNamesInDir(componentDir).map(stripExtension);

  const nextCompNames = assetNames.map(assetNameToCompName);
  const newCompNames = difference(nextCompNames, currCompNames);
  generateNewComps(newCompNames, componentDir);

  const staleCompNames = findStaleComps(currCompNames, nextCompNames)
  removeStaleComps(staleCompNames, componentDir);

  // update story
  // generateStoryFile(nextCompNames, componentDir);
};


// running inline for now
const ASSET_DIR = resolve(__dirname, '../src/assets/icons');
const COMPONENT_DIR = resolve(__dirname, '../src/components/icons');

const watch = (assetDir) => {
  watchDir(assetDir, () => generate(assetDir, COMPONENT_DIR));
};
watch(ASSET_DIR);