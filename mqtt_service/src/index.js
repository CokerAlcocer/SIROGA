const exp = require('express');
const mor = require('morgan');

const app = exp();

app.set('port', process.env.PORT || 4000);

app.use(mor('dev'));
app.use(exp.urlencoded({extended: false}));
app.use(exp.json());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use(require('./routes/index.js'))
app.use('/measure', require('./routes/measure.js'));
app.use('/operation', require('./routes/operation.js'));

app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});