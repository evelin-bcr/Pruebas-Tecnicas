import mongoose from "mongoose";

const empleadosSchema = new mongoose.Schema({
  codigo: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true
  },
  apellido1: {
    type: String,
    required: true
  },
  apellido2: {
    type: String,
  },
  codigo_departamento: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Departamentos", 
    required: true
  },

}, {
  timestamps: true 

});

export const Empleados = mongoose.model("Empleados", empleadosSchema);