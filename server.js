const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('index');
});

app.get('/botnv', (req, res) => {
  res.render('botnv');
});

app.get('/home', (req, res) => {
  res.render('home');
});

app.get('/servers', (req, res) => {
  res.render('servers');
});

app.get('/anuncios', (req, res) => {
  res.render('anuncios');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
