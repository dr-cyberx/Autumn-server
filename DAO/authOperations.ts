import { NextFunction, Request, Response } from "express";
import User from "../db/models/users";
import { sendResponse, generateResponseObj } from "../utils/sendResponse";

export const authSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (req.body.email && req.body.password) {
      new User({
        email: req.body.email,
        password: req.body.password,
      })
        .save()
        .then(({ email, password, _id }: any) => {
          sendResponse(res, {
            ...generateResponseObj(200, "User Registered Successfully!", {
              email,
              password,
              _id,
            }),
          });
        })
        .catch((err: Error) => {
          sendResponse(res, {
            ...generateResponseObj(400, "User Registration failed!", {
              error: err,
            }),
          });
        });
    } else {
      sendResponse(res, {
        ...generateResponseObj(400, "Email and Password is requried!", {}),
      });
    }
  } catch (error: any) {
    sendResponse(res, {
      ...generateResponseObj(400, "Something went wrong!", {
        error,
      }),
    });
  }
};
