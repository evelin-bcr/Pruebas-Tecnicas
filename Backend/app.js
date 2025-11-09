// El archivo de nuestra aplicacion
// Configurar nuestro servidor y gestionar la logica de negocio

// Importar las dependencs neesarias
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { conexionMongo } from "./src/config/db.js";
import { empleadosRouter } from "./src/routes/empleados.routes.js";
import { departamentosRouter } from "./src/routes/departamentos.routes.js";


// 2. Configurar las dependencias necesarias
const app = express();
dotenv.config ();
const port = process.env.PORT;
conexionMongo(); 

// 3.Funcionalidades que necesite agregar
app.get("/", (req,res)=>{
res.send("El servidor funciona")
});

app.use(cors());
app.use(express.json());
app.use("/empleados", empleadosRouter);
app.use("/departamentos", departamentosRouter);



// 4.Levantar el servidor 
app.listen(port, ()=>{
    console.log(`El servidor esta ejecutandose en http://localhost:${port}`)
});