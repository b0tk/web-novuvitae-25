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
  const developerToken = 'YOUR_DEVELOPER_TOKEN'; // Reemplaza con tu token de desarrollador
    const stationUrl = 'https://music.apple.com/es/station/station-id'; // Reemplaza con la URL de tu estación de radio
  res.render('botnv', {
    developerToken: developerToken,
    stationUrl: stationUrl
  });
});

app.get('/home', (req, res) => {
  res.render('sections/home');
});

app.get('/snap', (req, res) => {
  res.render('snap/snap');
});


app.get('/servers', (req, res) => {
  res.render('sections/servers');
});

app.get('/anuncios', (req, res) => {
  res.render('sections/anuncios');
});

app.get('/nvcraft', (req, res) => {
  res.render('pags-sv/nvcraft'); // Aquí va la ruta del archivo ejs
});

app.get('/projectnv', (req, res) => {
  res.render('pags-sv/projectnv');
});

app.get('/rusticanv', (req, res) => {
  res.render('pags-sv/rusticanv');
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
