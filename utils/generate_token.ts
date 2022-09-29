import jwt from "jsonwebtoken";

export const generateToken = (
  time: number,
  userId: string,
  phoneNumber: string
): { token: string } => {
  let jwtSecretKey: any = process.env.JWT_SECRET_KEY;
  let data = {
    time,
    userId,
    phoneNumber,
  };

  const token: string = jwt.sign(data, jwtSecretKey);

  return { token };
};
