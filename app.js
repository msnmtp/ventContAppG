// importar el mòdul express
const express = require('express');
// importar el mòdul path
const path = require('path');
// importar el mòdul body-parser
const bodyParser = require('body-parser');
// importar l'arxiu on es troben les rutes
const routes = require('./routes/index');

// creació d'una nova aplicació express
const app = express();

// buscar els templates al directori views
app.set('views', path.join(__dirname, 'views'));
// li diem que utilitzem el motor de templates pug
app.set('view engine', 'pug');

// utilització de body parser
app.use(bodyParser.urlencoded({extended: true}));
// quan rebi un request de /+ qualsevol cosa, utilitzar l'arxiu de rutes
app.use('/', routes);
// per servir arxius estàtics: imatges, javascript, css
// al directori public posarem aquests arxius
app.use(express.static('public'));

// exportar la variable app per ésser usada en altres arxius
module.exports = app;