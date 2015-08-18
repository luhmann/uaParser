#! /usr/bin/env node

var UAParser = require('user-agent-parser'),
    sprintf = require('sprintf-js').vsprintf,
    parser = new UAParser(),
    userAgentString = process.argv.slice(2);

var result = parser.setUA(userAgentString).getResult();

console.log(sprintf('Device: %s %s', [result.device.vendor, result.device.model]));
console.log(sprintf('Browser: %s %s', [result.browser.name, result.browser.version]));
console.log(sprintf('OS: %s %s', [result.os.name, result.os.version]));
