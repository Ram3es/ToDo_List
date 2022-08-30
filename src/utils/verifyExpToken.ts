import * as jwt from "jsonwebtoken";
import { shh } from "@shared/";

export const verifyExpToken = (token: string) => {
  
  const decoded = jwt.verify(token, shh) as jwt.JwtPayload;
  if (decoded && (decoded.exp as number) < new Date().getTime()) {
    return false;
  } else {
    return decoded.data;
  }
};
