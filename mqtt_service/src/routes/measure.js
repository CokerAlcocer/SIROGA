const exp = require('express');
const router = exp.Router();
const pool = require('../database.js');
const getValues = require('./mqtt');

router.get('/', async (req, res) => {
    let measures = await pool.query("SELECT * FROM measure_history")
    let measuring = getValues();
    res.json({
        status: 200,
        message: 'Service running on port 4000',
        values: measures
    });
});

router.post('/', async (req, res) => {
    let values = getValues();
    sistem_id = 1;
    let { broker_link, hum_earth, hum_air, temp_earth, temp_air } = values;

    let measure = {
        broker_link, hum_earth, hum_air, temp_earth, temp_air, sistem_id
    }

    await pool.query('INSERT INTO measure_history SET ?', [measure]);

    res.json({
        status: 200,
        message: "Saved",
        data: measure
    })
});

module.exports = router;