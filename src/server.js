const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const morgan = require('morgan');
const Handlebars = require('handlebars');

// Inicializaciones
const app = express();

// Configuraciones
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(__dirname, 'views', 'layouts'),
    partialsDir: path.join(__dirname, 'views', 'partials'),
    extname: '.hbs',
    handlebars: Handlebars,
    runtimeOptions: {
        allowProtoPropertiesByDefault: true
    }
}));

app.set('view engine', '.hbs');
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));

// Middlewares

app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

// Rutas

app.use(require('./routes/index.routes'));
app.use(require('./routes/notes.routes'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public'))); //encuentra la carpeta public

module.exports = app;


