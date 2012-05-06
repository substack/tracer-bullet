#!/usr/bin/env node

require('long-stack-traces');
var path = require('path');

var file = path.resolve(process.argv[2]);
require(file);
