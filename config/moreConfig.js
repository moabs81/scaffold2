'use strict';
const fs = require('fs'),
    path = require('path');

const baseDir = fs.realpathSync(process.cwd());

const buildPath = relativePath => path.resolve(baseDir, relativePath);

const module1 = {
    loader: require.resolve('babel-loader')
};
console.log(module1.loader);

console.log(buildPath('src'));

module.exports = {
    buildPath: buildPath
};