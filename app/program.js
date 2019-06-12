'use strict';
var OSinfo = require('../modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdout.write('Call options: \n/nv - shows Node.js version\n/sl - shows system language\n/si - shows system info\n/e - exits app\n');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch(instruction) {
            case '/e':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case '/nv':
                process.stdout.write('Node.js version: ' + process.versions.node + '\n');
                break;
            case '/sl':
                process.stdout.write('System Language: ' + process.env.lang + '\n');
                break;
            case '/si':
                OSinfo.print();
                break;
            default:
                process.stderr.write('Fatal Error!\n');
        }
    }
});