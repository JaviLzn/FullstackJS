const express = require('express');
const router = express.Router();
const pacienteController = require('../controllers/pacienteController');

module.exports = function () {
    
    //Agrega nuevos pacientes
    // Metodo POST
    router.post('/pacientes', pacienteController.nuevoPaciente);

    // Obtener lista de pacientes desde la base de datos
    router.get('/pacientes', pacienteController.listPacientes);

    // Obtener pacientes por id
    router.get('/pacientes/:id', pacienteController.getPaciente);
    
    return router;
}