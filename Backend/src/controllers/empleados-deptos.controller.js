import { Departamentos } from "../models/departamentos.model.js";
import { Empleados } from "../models/empleados.model.js";

// Obtener todos los departamentos con sus empleados - GET
export const getDepartamentosConEmpleados = async (request, response) => {
  try {

    const departamentos = await Departamentos.find();
    const departamentosConEmpleados = await Promise.all(
      departamentos.map(async (dept) => {
        const empleados = await Empleados.find({ codigo_departamento: dept._id });
        return {
          ...dept.toObject(),
          empleados
        };
      })
    );

    return response.status(200).json(departamentosConEmpleados);

  } catch (error) {
    return response.status(500).json({
      mensaje: "❌ Ocurrió un error al obtener los departamentos con empleados",
      error: error.message || error
    });
  }
};
