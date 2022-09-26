import jwt from "jsonwebtoken";

export const generateToken = (
  time: number,
  userId: string
): { token: string } => {
  
  let jwtSecretKey: any = process.env.JWT_SECRET_KEY;
  let data = {
    time,
    userId,
  };

  const token: string = jwt.sign(data, jwtSecretKey);

  return { token };
};
