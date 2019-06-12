'use strict';
var os = require('os');
var timeConversion = require('./timeConversion');
var ostype = os.type();

if(ostype === 'Darwin') {
    ostype = 'OSX';
} if(ostype === 'Windows_NT') {
    ostype = 'Windows';
}

function getOSinfo() {
    console.log('System: ' + ostype + ' ' + os.release());
    console.log('CPU: ' + os.cpus()[0].model);
    timeConversion.timeChange();
    console.log('User name: ' + os.userInfo().username);
    console.log('User home dir: ' + os.userInfo().homedir);
}

exports.print = getOSinfo;