import mongoose from "mongoose";

const departamentosSchema = new mongoose.Schema({
  codigo: {
    type: Number,
    required: true,
  },
  nombre: {
    type: String,
    required: true
  },

}, {
  timestamps: true 

});

export const Departamentos = mongoose.model("Departamentos", departamentosSchema);
