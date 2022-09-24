import { Response } from "express";

export type iGenerateResponseObj = {
  status: number;
  message: string;
  data: any;
  token?: any;
};

export const generateResponseObj = (
  status: number = 404,
  message: string = "Reqest fullfilled successfully",
  data: any = {},
  token?: any
): iGenerateResponseObj => {
  const resObj = { status, message, data };
  if (token) {
    Object.assign(resObj, { token });
  }
  return resObj;
};

export const sendResponse = (
  res: Response,
  responseObj: iGenerateResponseObj
) => res.json({ ...responseObj });
