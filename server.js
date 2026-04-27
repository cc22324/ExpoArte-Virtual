import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDB } from "./config/db.js";
import authRoutes from "./routes/auth.js";

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use("/api", authRoutes);

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});