import { NextFunction, Request, Response } from "express";

export const requestTime = function (
  req: Request,
  res: Response,
  next: NextFunction
): void {
  req.requestTime = Date.now();
  next();
};
