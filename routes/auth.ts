import express, { NextFunction, Request, Response, Router } from "express";
import authPaths from "../utils/paths";

const authRoute: Router = express.Router();

authRoute.get(
  authPaths.login,
  async (req: Request, res: Response, next: NextFunction) => {}
);

authRoute.get(
  authPaths.signup,
  async (req: Request, res: Response, next: NextFunction) => {}
);

authRoute.get(
  authPaths.forgot_password,
  async (req: Request, res: Response, next: NextFunction) => {}
);

authRoute.get(
  authPaths.is_valid_user,
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
