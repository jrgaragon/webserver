const express = require('express')
const app = express();

app.get('/', (req, res) => {
    let result = {
        nombre: 'jorge',
        edad: 34,
        url: req.url
    };

    res.send(result);

});

app.get('/data', (req, res) => {
    res.send('data');
});

app.listen(8080, () => {
    console.log('Escuchando en el puerto 8080');
});