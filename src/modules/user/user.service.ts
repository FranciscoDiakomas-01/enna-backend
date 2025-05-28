import { Injectable } from "@nestjs/common";
import DatabaseService from "../database/database.service";
import serverConstants from "../../constants/server";
import EncriptPassWord from "src/utils/encriptPassowrd";
import IUser from "./entities/user.entity";
import { ConfigService } from "@nestjs/config";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
@Injectable()
export class UserService {
  constructor(
    private readonly databaseService: DatabaseService,
    private readonly config: ConfigService
  ) {}
  public async getAll(page: number) {
    const total = await this.count();
    const lastPage = Math.ceil(total.value / serverConstants.paginationLimit);
    try {
      const users = await this.databaseService.user.findMany({
        select: {
          id: true,
          name: true,
          lastname: true,
          bio: true,
          cancelled: true,
          completed: true,
          pedding: true,
          email: true,
          updated: true,
          sectorid: true,
          tel: true,
          type: true,
          sector: {
            select: {
              title: true,
            },
          },
        },
        skip: (page - 1) * serverConstants.paginationLimit,
        take: serverConstants.paginationLimit,
        orderBy: { created: "desc" },
        where: {
          type: {
            not: "Admin",
          },
        },
      });
      return {
        data: users,
        lastPage,
        total: total.value,
        limit: serverConstants.paginationLimit,
        page,
      };
    } catch (error) {
      return {
        data: [],
        lastPage,
        total: total.value,
        limit: serverConstants.paginationLimit,
        page,
      };
    }
  }
  public async getById(id: number | string) {
    try {
      const User = await this.databaseService.user.findFirst({
        select: {
          id: true,
          email: true,
          name: true,
          lastname: true,
          bio: true,
          completed: true,
          created: true,
          type: true,
          cancelled: true,
          pedding: true,
          tel: true,
          updated: true,
          sectorid: true,
          sector: {
            select: {
              title: true,
            },
          },
        },
        take: 1,
        where: {
          id: Number(id),
        },
      });
      return User ? User : ({} as IUser);
    } catch (error) {
      return {} as IUser;
    }
  }
  public async count() {
    try {
      const countUsers = await this.databaseService.user.count({
        where: {
          type: {
            not: "Admin",
          },
        },
      });

      return {
        text: "Funcionários",
        value: countUsers,
      };
    } catch (error) {
      return {
        text: "Funcionários",
        value: 0,
      };
    }
  }
  public async deleteById(id: number | string) {
    try {
      const deletedUser = await this.databaseService.user.delete({
        where: { id: Number(id) },
        select: { id: true },
      });
      return deletedUser && deletedUser?.id ? true : false;
    } catch (error) {
      return false;
    }
  }
  public async create(user: CreateUserDto) {
    try {
      const defaultUsersPassword = this.config.get<string>(
        "DEFAULTPASSWORD"
      ) as string;
      const InsertedUser = await this.databaseService.user.create({
        data: {
          email: user.email,
          lastname: user.lastname,
          name: user.name,
          password: EncriptPassWord(defaultUsersPassword),
          tel: user.tel,
          sectorid: user.sectorid,
          bio: user.bio,
          type: "Tecnic",
        },
        select: {
          id: true,
        },
      });
      return InsertedUser?.id ? true : false;
    } catch (error) {
      return false;
    }
  }
  public async update(user: UpdateUserDTO) {
    try {
      const updatedUser = await this.databaseService.user.update({
        data: {
          name: user.name,
          lastname: user.lastname,
          bio: user.bio,
        },
        where: {
          id: Number(user.id),
        },
        select: {
          id: true,
        },
      });
      return updatedUser && updatedUser?.id ? true : false;
    } catch (error) {
      return false;
    }
  }

  public async getUserByEmailPassowrdTelefone(
    email: string,
    password: string,
    telefone: string,
    id: number | string
  ) {
    try {
      const User = await this.databaseService.user.findFirst({
        select: {
          id: true,
          password : true
        },
        where: {
          AND: [
            {
              email: {
                equals: email,
              },
            },
            {
              tel: {
                equals: telefone,
              },
            },
            {
              id: {
                equals: Number(id),
              },
            },
          ],
        },
      });
      if (!User || !User?.password || !User?.id) {
        return { message: "not found" };
      }

    } catch (error) {
      return { message: "not found" };
    }
  }
}
