import express, { NextFunction, Request, Response, Router } from "express";
import User from "../db/models/users";
import authPaths from "../utils/paths";

const authRoute: Router = express.Router();

authRoute.post(
  authPaths.login,
  async (req: Request, res: Response, next: NextFunction) => {
    const newUser = new User({
      email: "hello@gmail.com",
      password: "admin@123",
    });
    await newUser.save();
    res.json({
      msg: "done !",
    });
  }
);

authRoute.get(
  authPaths.signup,
  async (req: Request, res: Response, next: NextFunction) => {}
);

authRoute.get(
  authPaths.verify_phone_number,
  async (req: Request, res: Response, next: NextFunction) => {}
);

authRoute.get(
  authPaths.verify_email,
  async (req: Request, res: Response, next: NextFunction) => {}
);

export default authRoute;
