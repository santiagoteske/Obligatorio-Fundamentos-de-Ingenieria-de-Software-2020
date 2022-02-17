
const express = require('express');
const app = express();
var path = require('path');
//cuando entre al servidor sin poner nada
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/html/MenuPrincipal.html'));
});

app.get('/HTML/:nombre', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/html/' + req.params.nombre));
});


app.get('/Styles/Style.css', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/Styles/' + "style.css"));
});

app.get('/Scripts/:nombre', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/Scripts/' + req.params.nombre));
});

app.get('/Imagenes/:nombre', function (req, res) {
    res.sendFile(path.join(__dirname + '/src/Imagenes/' + req.params.nombre));
});

app.listen(5000, () => {
    console.log('server on port 5000');
});