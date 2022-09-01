const express = require('express');
const app = express();
const path = require('path');
const process = require('process');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

/* Enrutadores */
const indexRouter = require('./routes/indexRouter');
const productsRouter = require('./routes/productsRouter')

app.use(express.static(path.join(__dirname, '../public')))

// Cofiguracion de "Vistas" - Se indica que se utilizara EJS y estos archivos estaran en la carpeta views
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, "views"))


/* Middlewares de Rutas */
app.use('/', indexRouter) // HOME 
app.use('/productos', productsRouter) // Listado - detalle

app.listen(PORT, () => console.log(`
Server listen port ${PORT}
http://localhost:${PORT}
`))