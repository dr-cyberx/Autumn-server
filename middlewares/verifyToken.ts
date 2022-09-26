import { NextFunction, Request, Response } from "express";

export const verifyToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== undefined) {
    const bearerToken = bearerHeader?.split("")[1];
    req.token = bearerToken;
    next();
  } else {
    res.json({ msg: "failed" });
  }
};
