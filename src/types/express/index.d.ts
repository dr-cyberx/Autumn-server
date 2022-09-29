import express from "express";

declare global {
  namespace Express {
    interface Request {
      requestTime: number;
      token: string | undefined;
      userData: { userId: string; email: string };
    }
  }
}
