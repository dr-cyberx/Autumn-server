import express, { Request, Response } from "express";
import dotenv from "dotenv";
import http from "http";

const app = express();

const server: ItypeServer = http.createServer(app);

import { Server } from "socket.io";

import authRoutes from "../routes/auth";
import connectDB from "../db/connectDB";
import { IOserver, ItypeServer } from "../types/server";

const io: IOserver = new Server(server);

dotenv.config({
  path: ".env",
});

app.use("/auth", authRoutes);

app.get("/app/ishealthy", (req: Request, res: Response) => {
  res.json({
    message: "App is healthy",
    status: 200,
  });
});

connectDB(`${process.env.MONGODB_CONNECTION_URI}`)
  .then(() => {
    io.on("connection", (socket: any) => {
      console.log("a user connected");
    });

    server.listen(process.env.APP_PORT, () => {
      console.log(`server is up on http://localhost:${process.env.APP_PORT}`);
    });
  })
  .catch((err: Error) => {
    console.log("failed to connect DB ", err);
  });
