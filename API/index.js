const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');

//Crear el servidor
const app = express();

//Habilitar CORS
app.use(cors());

//Conectar a mongodb
mongoose.Promise = global.Promise;

mongoose.connect('mongodb+srv://Javi:123@clusterdevjavi.2xtwz.mongodb.net/veterinaria', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

//Habilitar al bodyParser de Express
// no es necesario incluir la dependencia de body-Parser
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Habilitar rutas
 app.use('/', routes());

//Puerto e iniciar el servidor
app.listen(4000, () => {
  console.log('Se inicia el servidor');
});
