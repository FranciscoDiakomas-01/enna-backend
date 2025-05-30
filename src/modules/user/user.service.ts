import { Injectable } from "@nestjs/common";
import DatabaseService from "../database/database.service";
import serverConstants from "../../constants/server";
import EncriptPassWord from "src/utils/encriptPassowrd";
import IUser from "./entities/user.entity";
import { ConfigService } from "@nestjs/config";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDTO, UpdateUserDTOCredentials } from "./dto/update-user.dto";
import DecriptPassword from "src/utils/deciptPassowrd";
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
      const usersWithTaskCounts = await Promise.all(
        users.map(async (user) => {
          const [pending, cancelled, completed] = await Promise.all([
            this.databaseService.taskc.count({
              where: { owner: user.id, status: "Pending" },
            }),
            this.databaseService.taskc.count({
              where: { owner: user.id, status: "Cancelled" },
            }),
            this.databaseService.taskc.count({
              where: { owner: user.id, status: "Completed" },
            }),
          ]);

          return {
            ...user,
            taskStats: {
              pending,
              cancelled,
              completed,
            },
          };
        })
      );

      return {
        data: usersWithTaskCounts,
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
  public async getAllNames() {
    try {
      const users = await this.databaseService.user.findMany({
        select: {
          id: true,
          name: true,
          lastname: true,
        },
        orderBy: { created: "desc" },
        where: {
          type: {
            not: "Admin",
          },
        },
      });
      return {
        data: users,
      };
    } catch (error) {
      return {
        data: [],
      };
    }
  }
  public async getAllPatter(page: number, pattern: string) {
    const total = await this.count();
    const lastPage = Math.ceil(total.value / serverConstants.paginationLimit);
    try {
      const users = await this.databaseService.user.findMany({
        select: {
          id: true,
          name: true,
          lastname: true,
          bio: true,
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
          OR: [
            {
              name: {
                contains: pattern,
                mode: "insensitive",
              },
            },
            {
              lastname: {
                contains: pattern,
                mode: "insensitive",
              },
            },
            {
              email: {
                contains: pattern,
                mode: "insensitive",
              },
            },
            {
              bio: {
                contains: pattern,
                mode: "insensitive",
              },
            },
          ],
        },
      });
      const usersWithTaskCounts = await Promise.all(
        users.map(async (user) => {
          const [pending, cancelled, completed] = await Promise.all([
            this.databaseService.taskc.count({
              where: { owner: user.id, status: "Pending" },
            }),
            this.databaseService.taskc.count({
              where: { owner: user.id, status: "Cancelled" },
            }),
            this.databaseService.taskc.count({
              where: { owner: user.id, status: "Completed" },
            }),
          ]);

          return {
            ...user,
            taskStats: {
              pending,
              cancelled,
              completed,
            },
          };
        })
      );
      return {
        data: usersWithTaskCounts,
        lastPage,
        total: total.value,
        limit: serverConstants.paginationLimit,
        page,
        filter: pattern,
      };
    } catch (error) {
      return {
        data: [],
        lastPage,
        total: total.value,
        limit: serverConstants.paginationLimit,
        page,
        filter: pattern,
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
          created: true,
          type: true,
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
  public async updateUserCredentialUseCase(UserData: UpdateUserDTOCredentials) {
    try {
      const User = await this.databaseService.user.findFirst({
        select: {
          id: true,
          password: true,
        },
        where: {
          AND: [
            {
              email: {
                equals: UserData.oldEmail,
              },
            },
            {
              tel: {
                equals: UserData.oldTelefone,
              },
            },
            {
              id: {
                equals: Number(UserData.id),
              },
            },
          ],
        },
      });
      if (!User || !User?.password || !User?.id) {
        return { message: "not found" };
      } else {
        const isUserOwnerAcount = await this.isUserPassword(
          UserData.oldPassword,
          UserData.id
        );
        if (isUserOwnerAcount.message == "can update") {
          const isUserUpdated = await this.updateUserCredentials(
            UserData.currentEmail,
            UserData.currentPassowrd,
            UserData.currentTelefone,
            UserData.id
          );
          return isUserUpdated
            ? { updated: true, message: "updated" }
            : { message: "Erro ao actualizar o perfil" };
        } else {
          return { message: isUserOwnerAcount.message };
        }
      }
    } catch (error) {
      return { message: "not found" };
    }
  }
  public async updateUserCredentials(
    email: string,
    password: string,
    tel: string,
    userId: number | string
  ) {
    const encriptedPassord = EncriptPassWord(password);
    try {
      const updatedUser = await this.databaseService.user.update({
        data: {
          tel: tel,
          email,
          password: encriptedPassord,
        },
        where: {
          id: Number(userId),
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
  public async isUserPassword(password: string, userId: number | string) {
    try {
      const User = await this.databaseService.user.findFirst({
        select: {
          password: true,
          id: true,
        },
        where: {
          id: Number(userId),
        },
      });
      if (!User || !User?.id || !User?.password) {
        return { message: "not found" };
      }
      return DecriptPassword(User.password) == password
        ? { message: "can update" }
        : { message: "credentials invalid" };
    } catch (error) {
      return { message: "not found" };
    }
  }
}
