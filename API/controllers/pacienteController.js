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

/**  Actualiza un paciente por id*/
exports.updatePaciente = async (req, res, next) => {
    try {
        const paciente = await Paciente.findOneAndUpdate({_id: req.params.id}, req.body, {
            new:true
        });
        res.json(paciente);
    } catch (error) {
        console.log(error);
        next();       
    }
}

/**  Borra un paciente por id*/
exports.deletePaciente = async (req, res, next) => {
    try {
        await Paciente.findOneAndDelete({_id: req.params.id});
        res.json({mensaje: 'El paciente fue eliminado'});
    } catch (error) {
        console.log(error);
        next();       
    }
}