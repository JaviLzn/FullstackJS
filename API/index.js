const express = require('express');

//Crear el servidor
const app = express();

//Puerto e iniciar el servidor
app.listen(4000, () => {
  console.log('Se inicia el servidor');
});
