import { error } from "console";
import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export const decodeToken = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    let jwt_secret_key: any = process.env.JWT_SECRET_KEY;
    let decoded: any = jwt.verify(req.token || "", jwt_secret_key);
    req.userData = { userId: decoded?.userId, email: decoded?.email };
    next();
  } catch (err) {
    throw new Error("token validation failed");
  }
};
