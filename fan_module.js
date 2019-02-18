/**
 * Released under Apache licence
 * less LICENSE file inside directory
 * 
 */
var Gpio = require('onoff').Gpio;

var in1 = new Gpio(4, 'out');

module.exports.on = function(callback) {
    in1.writeSync(1);
}

module.exports.off = function(callback) {
    in1.writeSync(0);
}
