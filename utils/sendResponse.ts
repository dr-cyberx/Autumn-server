import { Response } from "express";

export type iGenerateResponseObj = {
  status: number;
  message: string;
  data: any;
  token?: any;
};

export const autumnResponse = (
  res: Response,
  status: number = 404,
  message: string = "Reqest fullfilled successfully",
  data: any = {},
  success: boolean = false,
  token?: any
): void => {
  const resObj = { status, message, data, success };
  if (token) {
    Object.assign(resObj, { token });
  }
  res.json({ ...resObj });
};
