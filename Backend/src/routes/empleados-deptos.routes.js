import express from "express";
import { getDepartamentosConEmpleados } from "../controllers/empleados-deptos.controller.js";

export const empleadosDepartamentosRouter = express.Router();

empleadosDepartamentosRouter.get("/", getDepartamentosConEmpleados);
