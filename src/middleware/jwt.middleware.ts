import {
  Injectable,
  NestMiddleware,
  UnauthorizedException,
} from "@nestjs/common";
import { Request, Response, NextFunction } from "express";
import { JwtService } from "@nestjs/jwt";
import { userType } from "generated/prisma";

@Injectable()
export class JwtMiddleware implements NestMiddleware {
  constructor(private readonly jwtService: JwtService) {}
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new UnauthorizedException("Token não fornecido.");
    }
    
    const token = authHeader.replace("Bearer ", "").trim();
    try {
      const payload = this.jwtService.verify(token) as {
        sub: number | string;
        type: userType;
      };
      req.user = payload;
      next();
    } catch (err) {
      console.log(err);
      throw new UnauthorizedException("Token inválido.");
    }
  }
}
