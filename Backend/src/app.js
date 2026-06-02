import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";

const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);

export default app;
