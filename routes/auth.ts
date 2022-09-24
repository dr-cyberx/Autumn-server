import express, { NextFunction, Request, Response, Router } from "express";
import { authSignUp } from "../DAO/authOperations";
import User from "../db/models/users";
import authPaths from "../utils/paths";
import { generateResponseObj, sendResponse } from "../utils/sendResponse";

const authRoute: Router = express.Router();

authRoute.post(
  authPaths.login,
  async (req: Request, res: Response, next: NextFunction) => {}
);

authRoute.post(authPaths.signup, authSignUp);

authRoute.get(
  authPaths.verify_phone_number,
  async (req: Request, res: Response, next: NextFunction) => {}
);

authRoute.get(
  authPaths.verify_email,
  async (req: Request, res: Response, next: NextFunction) => {}
);

export default authRoute;
