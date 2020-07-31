const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

module.exports = function () {
    
    //Agrega nuevos pacientes
    // Metodo POST
    router.post('/pacientes', pacienteController.nuevoPaciente);

    return router;
}