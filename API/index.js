const express = require('express');
const mongoose = require('mongoose');

//Crear el servidor
const app = express();

//Conectar a mongodb
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Javi:123@clusterdevjavi.2xtwz.mongodb.net/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Puerto e iniciar el servidor
app.listen(4000, () => {
  console.log('Se inicia el servidor');
});
