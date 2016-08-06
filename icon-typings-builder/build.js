#! /usr/bin/env node
/**
 * Based on https://github.com/callemall/material-ui/tree/master/packages/icon-builder
 */

'use strict';

const fs = require('fs');
const path = require('path');
const Mustache = require('mustache');
const glob = require('glob');
const mkdirp = require('mkdirp');
const rrs = require('recursive-readdir-sync');

const OUTPUT_DIR = path.resolve(__dirname, '../svg-icons');
const SVG_DIR = path.resolve(__dirname, './node_modules/material-design-icons/');

function main() {
  fs.mkdirSync(OUTPUT_DIR);

  const files = glob.sync(path.join(SVG_DIR, '**/production/*_24px.svg'));

  files.forEach(svgPath => {
    const folderName = path.relative(SVG_DIR, path.resolve(path.dirname(svgPath), '../..'));

    let fileName = path.basename(svgPath);
    fileName = fileName.replace('_24px.svg', '.d.ts');
    fileName = fileName.slice(3);
    fileName = fileName.replace(/_/g, '-');

    if (fileName.indexOf('3d') === 0) {
      fileName = 'three-d' + fileName.slice(2);
    }

    const destinationFileName = path.resolve(OUTPUT_DIR, folderName, fileName);
    processFile(fileName, destinationFileName);
  });

  generateIndex();
}

function processFile(fileName, destPath) {
  const outputFileDir = path.dirname(destPath);

  if (!fs.existsSync(outputFileDir)) {
    mkdirp.sync(outputFileDir);
  }

  const fileString = getDTSString(fileName);
  fs.writeFileSync(destPath, fileString);
}

function pascalCase(fileName) {
  const splitregex = new RegExp('[' + path.sep + '-]+');

  let parts = fileName.replace('.d.ts', '').split(splitregex);
  parts = parts.map(part => part.charAt(0).toUpperCase() + part.substring(1));

  const className = parts.join('');

  return className;
}

function getDTSString(fileName) {
  const className = pascalCase(fileName);

  const template = fs.readFileSync(path.join(__dirname, 'SvgIcon.js.mustache'), {
    encoding: 'utf8',
  });

  return Mustache.render(template, { className: className });
}

function generateIndex() {
  const outArray = [];

  rrs(OUTPUT_DIR).forEach(file => {
    if (file !== 'index.js') {
      const moduleName = pascalCase(path.basename(file));
      const modulePath = path.relative(OUTPUT_DIR, file.replace('.d.ts', '')).replace(/\\/g, '/');

      outArray.push(`export ${moduleName} from './${modulePath}';\n`);
    }
  });

  fs.writeFileSync(path.resolve(OUTPUT_DIR, 'index.d.ts'), outArray.join(''));

}

main();
