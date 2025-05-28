import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  HttpException,
  HttpStatus,
  Put,
} from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./dto/create-user.dto";
import isValidEmailDomain from "src/utils/isvalidEmailDomain";
import { UpdateUserDTO } from "./dto/update-user.dto";

@Controller("user")
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  public async getAllUsers(@Query("page") page: string = "1") {
    const data = await this.userService.getAll(Number(page));
    return data;
  }
  @Get("/count")
  public async getCount() {
    const users = await this.userService.count();
    return users;
  }

  @Get("/:id")
  public async getUserByID(@Param("id") id: string) {
    const data = await this.userService.getById(id);
    return data;
  }
  @Delete("/:id")
  public async deleteUserByID(@Param("id") id: string) {
    const data = await this.userService.deleteById(id);
    return {
      deleted: data,
    };
  }
  @Post()
  public async createUser(@Body() user: CreateUserDto) {
    const userEmailDomanin = user.email?.split("@")[1];
    const isEmailDomainValid = await isValidEmailDomain(userEmailDomanin);
    if (!isEmailDomainValid) {
      throw new HttpException(
        "Domínio de email inválido",
        HttpStatus.BAD_REQUEST
      );
    }
    const insertedUser = await this.userService.create(user);
    if (!insertedUser) {
      throw new HttpException(
        "Erro ao criar o funcionário",
        HttpStatus.BAD_REQUEST
      );
    }
    return {
      created: true,
    };
  }
  @Put()
  public async updateUser(@Body() user: UpdateUserDTO) {
    const updated = await this.userService.update(user);
    if (!updated) {
      throw new HttpException(
        "Erro ao actualizar o perfil",
        HttpStatus.BAD_REQUEST
      );
    }
    return {
      updated,
    };
  }
}
