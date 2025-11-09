import express from "express";
import {
  postDepartamento,
  getAllDepartamentos,
  putDepartamentoById,
  deleteDepartamentoById
} from "../controllers/departamentos.controller.js";


export const departamentosRouter = express.Router();

// Crear departamento
departamentosRouter.post("/", postDepartamento);

// Obtener todos los departamentos
departamentosRouter.get("/", getAllDepartamentos);

// Actualizar departamento por ID
departamentosRouter.put("/:id", putDepartamentoById);

// Eliminar departamento por ID
departamentosRouter.delete("/:id", deleteDepartamentoById);
