const Paciente = require('../models/Paciente');

//Cuando se crea un nuevo cliente
exports.nuevoPaciente = async (req, res, next) => {
  // Crear objeto del paciente

  const paciente = new Paciente(req.body);

  try {
    await paciente.save();
    res.json({ mensaje: 'El cliente se agregó correctamente' });
  } catch (error) {
    console.log(error);
    next();
  }

 
};
