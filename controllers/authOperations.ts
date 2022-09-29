import { NextFunction, Request, Response } from "express";
import { compare } from "bcrypt";
import User from "../db/models/users";
import { typeAuthBasicType } from "../types/server";
import { generateToken } from "../utils/generate_token";
import { autumnResponse } from "../utils/sendResponse";

export const authSignUp = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    if (req.body.phoneNumber && req.body.password) {
      new User({
        phoneNumber: req.body.phoneNumber,
        password: req.body.password,
      })
        .save()
        .then(({ _id, phoneNumber }: any) => {
          const { token }: { token: string } = generateToken(
            req.requestTime,
            _id,
            phoneNumber
          );

          autumnResponse(res, 200, "Registered Successfully!", {}, true, token);
        })
        .catch((err: Error) => {
          console.log(err);
          autumnResponse(res, 400, "User Registered failed!", null, false);
        });
    } else {
      autumnResponse(res, 400, "Email and Password is requried", null, false);
    }
  } catch (error: any) {
    autumnResponse(res, 400, "Something went wrong", null, false);
  }
};

export const authLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    if (req.body.phoneNumber && req.body.password) {
      const { phoneNumber, password }: typeAuthBasicType = req.body;
      const isUserExist: any = await User.findOne({ phoneNumber });
      if (isUserExist?.phoneNumber) {
        const comparePassword: boolean = await compare(
          password,
          isUserExist?.password
        );
        if (comparePassword) {
          const { token }: { [x: string]: string } = generateToken(
            req.requestTime,
            isUserExist.id,
            isUserExist.email
          );
          autumnResponse(res, 200, "Login Successfully!", {}, true, token);
        } else {
          autumnResponse(res, 400, "Invalid Credentials!", null, false);
        }
      } else {
        autumnResponse(res, 400, "User not exist!", null, false);
      }
    } else {
      autumnResponse(res, 400, "Email & Password is required", null, false);
    }
  } catch (err: any) {
    autumnResponse(res, 400, "Something went wrong", null, false);
  }
};
