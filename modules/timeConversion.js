'use strict';
var os = require('os');

function timeDisplay () {
    var uptime = os.uptime();
    var fullHours = Math.floor(uptime / 3600);
    var fullMinutes = Math.floor((uptime - (fullHours * 3600)) / 60);
    var fullSeconds = uptime - (fullHours * 3600) - (fullMinutes * 60);
    console.log('Time from system start: ' + fullHours + ' hrs ' + fullMinutes + ' min ' + fullSeconds + ' sec');
}

exports.timeChange = timeDisplay;