import dotenv from "dotenv";
dotenv.config();
import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRouter from "./routes/auth.route.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

const port = process.env.PORT || 5000;

app.use("/api/auth", authRouter);

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("Connected...");

    app.listen(port, () => console.log("Runn on 5000"));
  })
  .catch((e) => console.log(e.message));
