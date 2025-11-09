import { Departamentos } from "../models/departamentos.model.js";


// Crear un departamento - POST
export const postDepartamento = async (request, response) => {
  try {
    const { codigo, nombre } = request.body;

    // Validar datos
    if (!codigo || !nombre) {
      return response.status(400).json({
        mensaje: "Debes enviar el código y el nombre del departamento ⚠️"
      });
    }

    await Departamentos.create({ codigo, nombre });

    return response.status(201).json({
      mensaje: "Departamento creado correctamente"
    });

  } catch (error) {
    return response.status(400).json({
      mensaje: "❌ Ocurrió un error al crear el departamento",
      error: error.message || error
    });
  }
};



// Mostrar todos los departamentos - GET
export const getAllDepartamentos = async (request, response) => {
  try {
    const allDepartamentos = await Departamentos.find();

    return response.status(200).json({
      mensaje: "Departamentos obtenidos correctamente",
      data: allDepartamentos
    });

  } catch (error) {
    return response.status(500).json({
      mensaje: "❌ Ocurrió un error al obtener los departamentos",
      error: error.message || error
    });
  }
};


// Actualizar un departamento - PUT
export const putDepartamentoById = async (request, response) => {
  try {
    const idForUpdate = request.params.id;
    const dataForUpdate = request.body;

    await Departamentos.findByIdAndUpdate(idForUpdate, dataForUpdate);

    return response.status(200).json({
      mensaje: "Departamento actualizado correctamente"
    });

  } catch (error) {
    return response.status(500).json({
      mensaje: "❌ Ocurrió un error al actualizar el departamento",
      error: error.message || error
    });
  }
};



// Eliminar un departamento - DELETE
export const deleteDepartamentoById = async (request, response) => {
  try {
    const idForDelete = request.params.id;

    await Departamentos.findByIdAndDelete(idForDelete);

    return response.status(200).json({
      mensaje: "Departamento eliminado correctamente"
    });

  } catch (error) {
    return response.status(500).json({
      mensaje: "❌ Ocurrió un error al eliminar el departamento",
      error: error.message || error
    });
  }
};
