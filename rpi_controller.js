/**
 * Released under Apache licence
 * less LICENSE file inside directory
 * 
 */
var fan = require('./fan_module');
const mqtt = require('mqtt');

// var options = {
//     host: 'test.mosquitto.org',
//     port: 1883,
//     clientId: 'RPI'
// }

var options = {
    host: 'broker.hivemq.com',
    port: 1883,
    clientId: 'RPI'
}

var topicsFan = {
    command: '/pub/cmd/fan',
    ack: '/pub/ack/fan'
}

var client = mqtt.connect(options);

client.on('connect', () => {
    console.log(`Connected on ${options.host}:${options.port}`);
    client.subscribe(topicsFan.command);
});

function cmdDispatch(cmd) {

    if (cmd.toString().trim() === '1') {
        fan.on();
        client.publish(topicsFan.ack, `${options.clientId}: fan ON`);
        console.log(`Fan On`);
    }

    if (cmd.toString().trim() === '0') {
        fan.off();
        client.publish(topicsFan.ack, `${options.clientId}: fan OFF`);
        console.log(`FAN Off`);
    }

}


client.on('message', (topic, message) => {

    if (topic === topicsFan.command) {
        console.log(`Received command: ${message}.`);
        cmdDispatch(message);
    }
});
