const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Inicializaciones
const app = express();

// Configuraciones
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

// Middlewares
app.use(express.urlencoded({ extended: false }));

// Rutas
app.get('/', (req, res) => {
    res.render('index');
});

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

module.exports = app;

