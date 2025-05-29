import { Module } from "@nestjs/common";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "./auth.service";
import { AuthController } from "./auth.controller";
import { UserModule } from "../user/user.module";
import DatabaseModule from "../database/database.module";

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
      
    }),
    DatabaseModule
  ],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
