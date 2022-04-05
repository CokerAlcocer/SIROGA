const exp = require('express');
const router = exp.Router();

router.get('/', async(req, res) => {
    console.log('Servicio corriendo');
});

module.exports = router;