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

/** Obtener la lista de todos los pacientes */
exports.listPacientes = async (req, res, next) => {
  try {
    const pacientes = await Paciente.find({});
    res.json(pacientes);
  } catch (error) {
    console.log(error);
    next();
  }
};

/** Obtener un paciente por id */
exports.getPaciente = async (req, res, next) => {
  try {
    const paciente = await Paciente.findById(req.params.id);
    res.json(paciente);
  } catch (error) {
    console.log(error);
    next();
  }
};
