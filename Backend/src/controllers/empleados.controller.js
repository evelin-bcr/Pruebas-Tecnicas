import { Empleados } from "../models/empleados.model.js";

// Creacion de un empleado - POST
export const postEmpleado = async (request, response) => {
  try {
    const { codigo, nombre, apellido1, apellido2, codigo_departamento } = request.body;

    await Empleados.create({
      codigo,
      nombre,
      apellido1,
      apellido2,
      codigo_departamento
    });

    return response.status(201).json({
      mensaje: "Empleado creado correctamente"
    });

  } catch (error) {
    return response.status(400).json({
      mensaje: "❌ Ocurrió un error al crear el empleado",
      error: error.message || error
    });
  }
};


// Mostrar todos los empleados - GET
export const getAllEmpleados = async (request, response) => {
  try {
    const allEmpleados = await Empleados.find().populate("codigo_departamento", "codigo nombre");

    return response.status(200).json({
      mensaje: "Empleados obtenidos correctamente",
      data: allEmpleados
    });

  } catch (error) {
    return response.status(500).json({
      mensaje: "❌ Ocurrió un error al obtener los empleados",
      error: error.message || error
    });
  }
};


// Actualizar un empleado - PUT
export const putEmpleadoById = async (request, response) => {
  try {
    const idForUpdate = request.params.id;
    const dataForUpdate = request.body;

    await Empleados.findByIdAndUpdate(idForUpdate, dataForUpdate);

    return response.status(200).json({
      mensaje: "Empleado actualizado correctamente"
    });

  } catch (error) {
    return response.status(500).json({
      mensaje: "❌ Ocurrió un error al actualizar el empleado",
      error: error.message || error
    });
  }
};


// Eliminar un empleado - DELETE
export const deleteEmpleadoById = async (request, response) => {
  try {
    const idForDelete = request.params.id;

    await Empleados.findByIdAndDelete(idForDelete);

    return response.status(200).json({
      mensaje: "Empleado eliminado correctamente"
    });

  } catch (error) {
    return response.status(500).json({
      mensaje: "❌ Ocurrió un error al eliminar el empleado",
      error: error.message || error
    });
  }
};