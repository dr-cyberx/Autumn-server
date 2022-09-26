import { NextFunction, Request, Response } from "express";
import User from "../db/models/users";
import { generateToken } from "../utils/generate_key";
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
        .then(({ _id }: any) => {
          const { token } = generateToken(req.requestTime, _id);
          sendResponse(res, {
            ...generateResponseObj(200, "User Registered Successfully!", {
              token,
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
