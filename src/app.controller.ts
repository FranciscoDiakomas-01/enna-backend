import { Controller , Get } from '@nestjs/common';
import AppService from './app.service';


@Controller()
export default class AppController{
  constructor(private readonly AppService : AppService){}
  @Get()
  public async getResume() {
    const resume = await this.AppService.getResume()
    return resume
  }
}