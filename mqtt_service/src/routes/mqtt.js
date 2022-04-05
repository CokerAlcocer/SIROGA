const mqtt = require('mqtt')
const ip = '3.86.223.117';
const client = mqtt.connect('mqtt://' + ip + ':1883', { clientId: 'node_client', username: 'root', password: 'root' });
const topics = ["measure/hum_air", "measure/hum_earth", "measure/temp_air", "measure/temp_earth", "operation/id"];
let hum_earth, hum_air, temp_earth, temp_air;
let broker_link = 'ESP8266';
let connected = false;
let values = {};

if (!connected) {
    client.on('connect', () => {
        if (client.connected) {
            for (let i = 0; i < topics.length-1; i++) {
                client.subscribe(topics[i], { qos: 0 });
            }
            console.log('mqtt_connected');
            client.publish(topics[4], "0");
        }
        
        connected = true;
    });
}

client.on('message', (topic, payload) => {
    console.log(payload+"");
    switch (topic) {
        case topics[0]:
            parseInt(payload) != undefined ? hum_earth = payload+"" : "";
            break;
        case topics[1]:
            parseInt(payload) != undefined ? hum_air = payload+"" : "";
            break;
        case topics[2]:
            parseInt(payload) != undefined ? temp_earth = payload+"" : "";
            break;
        case topics[3]:
            parseInt(payload) != undefined ? temp_air = payload+"" : "";
            break;
        default:
            console.log('Topico no encontrado...');
    }
    values = { broker_link, hum_earth, hum_air, temp_earth, temp_air };
})

client.on('error', (error) => {
    console.log('no pude conectarme al cliente');
    console.log(error);
    process.exit(1);
});

const getValues = () => {
    let response = values;
    return response;
}

module.exports = getValues;