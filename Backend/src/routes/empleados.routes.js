import express from "express";
import {
  postEmpleado,
  getAllEmpleados,
  putEmpleadoById,
  deleteEmpleadoById
} from "../controllers/empleados.controller.js";

export const empleadosRouter = express.Router();

// Crear empleado
empleadosRouter.post("/", postEmpleado);

// Obtener todos los empleados
empleadosRouter.get("/", getAllEmpleados);

// Actualizar empleado por ID
empleadosRouter.put("/:id", putEmpleadoById);

// Eliminar empleado por ID
empleadosRouter.delete("/:id", deleteEmpleadoById);
