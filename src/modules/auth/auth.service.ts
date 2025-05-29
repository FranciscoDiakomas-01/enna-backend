import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import DatabaseService from "../database/database.service";
import DecriptPassword from "src/utils/deciptPassowrd";

@Injectable()
export class AuthService {
  constructor(
    private readonly databaseservice: DatabaseService,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.databaseservice.user.findFirst({
      where: {
        email,
      },
    });
    if (user && DecriptPassword(user.password) == password) {
      const { password, ...result } = user;
      return result;
    }
    throw new UnauthorizedException("Credenciais inválidas");
  }

  async login(email: string, password: string) {
    const user = await this.validateUser(email, password);
    const payload = { sub: user.id , type : user.type};
    return {
      accessToken: this.jwtService.sign(payload),
      user
    };
  }
}
