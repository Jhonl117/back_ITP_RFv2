const { response } = require("express");

const RegistrarPaciente = require("../models/tempPacientes");

const tempturaPacientesGet = async (req, res = response) => {
  const registrarPacientes = await RegistrarPaciente.find();

  res.json({
    registrarPacientes,
  });
};

const tempturaPacientesPost = async (req, res) => {
  const body = req.body;
  let mensaje = "Registro de paciente creado con exito.";

  try {
    const registrarTemp = new RegistrarPaciente(body);
    await registrarTemp.save();
  } catch (error) {
    mensaje = "Problemas al crear un registro de paciente.";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });

}
const tempturaPacientesPut = async (req, res) => {
  const { _id, documento, nombres, apellidos, fecha, hora, temperatura  } = req.body;
  let mensaje = "Modificación exitosa";

  try {
    await RegistrarPaciente.findOneAndUpdate({ _id: _id }, { documento: documento, nombres: nombres, apellidos: apellidos, fecha: fecha, hora: hora, temperatura: temperatura });
  } catch (error) {
    mensaje = "Problemas al modificar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

const tempturaPacientesDelete = async (req, res = response) => {
  const { _id } = req.body;
  let mensaje = "Eliminación exitosa";
  try {
    await RegistrarPaciente.deleteOne({ _id: _id });
  } catch (error) {
    mensaje = "Problemas al eliminar";
    console.log(error);
  }
  res.json({
    msg: mensaje,
  });
};

module.exports = { 
  tempturaPacientesGet, 
  tempturaPacientesPost, 
  tempturaPacientesPut, 
  tempturaPacientesDelete };
