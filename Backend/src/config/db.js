import mongoose from "mongoose";

// Creación de la función de conexión
export const conexionMongo = async () => {
  try {
    await mongoose.connect(process.env.BD_URL, {
      dbName: "Pruebastecnicas",
    });
    console.log("✅ Conexión exitosa a MongoDB");
  } catch (error) {
    console.error("❌ Error al conectar con MongoDB:", error);
  }
};
