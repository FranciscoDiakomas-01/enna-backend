import { Request } from "express";
import { userType } from "generated/prisma";

declare module "express" {
  export interface Request {
    user?: {
      sub: number | string; 
      type: userType;
    };
  }
}
