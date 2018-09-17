const express = require('express');
const hbs = require('hbs');
const app = express();
require('./hbs/helpers/helpers')

app.use(express.static(__dirname + '/public'));

//EXPRESS HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'yorch'
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});

app.get('/data', (req, res) => {
    res.send('data');
});

app.listen(process.env.PORT || 5000, () => {
    console.log(`Escuchando en el puerto ${port}`);
});