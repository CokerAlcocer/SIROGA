const mqtt = require('mqtt')
const pool = require('../database.js');
const ip = '44.201.116.134';
const client = mqtt.connect('mqtt://' + ip + ':1883', { clientId: 'node_client', username: 'root', password: 'root' });
const topics = ["measure/hum_air", "measure/hum_earth", "measure/temp_air", "measure/temp_earth", "operation/id"];
let objects = [], brokers = [];
let values = {};

client.on('connect', async () => {
    if (client.connected) {
        brokers = await pool.query('SELECT broker, id FROM sistem');
        for(let i = 0; i < brokers.length; i++) {
            if(brokers[i]?.broker !== "---"){
                objects.push({
                    broker: brokers[i]?.broker,
                    hum_air: '0',
                    hum_earth: '0',
                    temp_air: '0',
                    temp_earth: '0',
                    sistem_id: brokers[i].id
                })
                for(let j = 0; j < topics.length; j++) {
                    client.subscribe(brokers[i]?.broker+'/'+topics[j]);
                    client.publish(brokers[i]?.broker+'/'+topics[topics.length - 1], '0');
                }
            }
        }
        console.log('mqtt_concectado')
    }
});

client.on('message', (topic, payload) => {
    let broker_link = '', broker = ''
    let flag = false

    for(let i = 0; i < topic.length; i++) {
        if(topic.charAt(i) === '/' && !flag){
            broker = topic.substring(0, i)
            flag = true
        }
    }

    for(let i = 0; i < topic.length; i++) {
        if(topic.charAt(i) === '/' && flag){
            broker_link = topic.substring(i+1)
            flag = false;
        }
    }

    let obj = {};
    for(let i = 0; i < objects.length; i++){
        if(objects[i].broker === broker){
            obj = objects[i];
        }
    }

    switch (broker_link) {
        case topics[0]:
            parseInt(payload) != undefined ? obj.hum_air = payload+"" : "";
            break;
        case topics[1]:
            parseInt(payload) != undefined ? obj.hum_earth = payload+"" : "";
            break;
        case topics[2]:
            parseInt(payload) != undefined ? obj.temp_air = payload+"" : "";
            break;
        case topics[3]:
            parseInt(payload) != undefined ? obj.temp_earth = payload+"" : "";
            break;
        case topics[4]:
            null
            break;
        default:
            console.log('Topico no encontrado...');
    }

    for(let i = 0; i < objects.length; i++){
        if(objects[i].broker === broker){
            objects[i] = obj;
        }
    }
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

setInterval(async () => {
    for(let i = 0; i < objects.length; i++){
        if(parseInt(objects[i].hum_air) != 0 || parseInt(objects[i].hum_earth) != 0 || parseInt(objects[i].temp_air) != 0 || parseInt(objects[i].temp_earth) != 0){
            await pool.query('INSERT INTO measure_history SET ?', [objects[i]]);
        }
    }
}, 120000);

module.exports = getValues;