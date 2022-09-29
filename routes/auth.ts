import express, { NextFunction, Request, Response, Router } from "express";
import { authLogin, authSignUp } from "../controllers/authOperations";
import { isTokenExist } from "../middlewares/isTokenExist";
import { decodeToken } from "../middlewares/verifyToken";
import authPaths from "../utils/paths";

const authRoute: Router = express.Router();

authRoute.post(authPaths.login, authLogin);

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
