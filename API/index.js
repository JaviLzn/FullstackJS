const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

//Crear el servidor
const app = express();

//Conectar a mongodb
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Javi:123@clusterdevjavi.2xtwz.mongodb.net/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Habilitar rutas
app.use('/', routes);

//Puerto e iniciar el servidor
app.listen(4000, () => {
  console.log('Se inicia el servidor');
});
