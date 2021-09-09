import { camelCase, difference } from 'lodash';
import svgr from '@svgr/core';
import { readdirSync, writeFileSync, readFileSync, unlinkSync } from 'fs';
import { join } from 'path';

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


export const generate = (assetDir, componentDir) => {
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

const ASSET_DIR = resolve(__dirname, '../src/assets/icons');
const COMPONENT_DIR = resolve(__dirname, '../src/components/icons');

generate(ASSET_DIR, COMPONENT_DIR);