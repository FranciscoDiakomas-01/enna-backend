import { Request } from 'express';
import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Req,
} from "@nestjs/common";
import { DashService } from "./dash.service";
import IsAdminThatUser from "src/utils/whoIs";

@Controller("dash")
export class DashController {
  constructor(private readonly dashService: DashService) {}

  @Get()
  public async getAdminDashBoard(@Req() request : Request) {
    const WoIsRequest = request.user
    if (WoIsRequest) {
      if (IsAdminThatUser(WoIsRequest.type)) {
        const adminDashBoard = await this.dashService.getAdminDash();
        return adminDashBoard;
      } else {
        const userDashBoard = await this.dashService.getUserDash(+WoIsRequest.sub);
        if (userDashBoard?.message) {
          throw new HttpException(
            "Erro ao pegar a sua dash",
            HttpStatus.BAD_REQUEST
          );
        }
        return userDashBoard;
      }
    }
    throw new HttpException("Erro ao pegar a sua dash", HttpStatus.BAD_REQUEST);
  
  }
}
