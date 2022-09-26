import express, { Request, Response, Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import http from "http";

const app: Express = express();

const server: ItypeServer = http.createServer(app);

import { Server } from "socket.io";

import authRoutes from "../routes/auth";
import connectDB from "../db/connectDB";
import { IOserver, ItypeServer } from "../types/server";
import { requestTime } from "../middlewares/others";

const io: IOserver = new Server(server);

dotenv.config({
  path: ".env",
});

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(requestTime);

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use("/autumn/auth", authRoutes);

app.get("/autumn/app/ishealthy", (req: Request, res: Response) => {
  res.json({
    message: "App is healthy",
    status: 200,
    date: req.requestTime,
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
