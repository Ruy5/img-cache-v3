'use strict';

const ImgCache = require('..');
const assert = require('assert').strict;

assert.strictEqual(ImgCache(), 'Hello from ImgCache');
console.info('ImgCache tests passed');
