import { Injectable } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDTO } from "./dto/update-task.dto";
import serverConstants from "src/constants/server";
import DatabaseService from "../database/database.service";
import { statusType } from "generated/prisma";
import { CreateNotificationDto } from "../notification/dto/create-notification.dto";
import DeepliksPath from "src/constants/frontend";
import { createNotification } from "src/utils/createNotification";

@Injectable()
export class TaskService {
  constructor(private readonly databaseService: DatabaseService) {}
  public async create(createTaskDto: CreateTaskDto) {
    try {
      const createdTask = await this.databaseService.taskc.create({
        data: {
          title: createTaskDto.title,
          description: createTaskDto.description,
          ticketId: createTaskDto.ticketid,
          owner: createTaskDto.owerId,
        },
        select: {
          id: true,
        },
      });
      if (createdTask?.id) {
        const notification: CreateNotificationDto = {
          deeplink: `${DeepliksPath.TaskTec}/${createdTask.id}`,
          message: "Uma nova tarefa está disponível.",
          owner: createTaskDto.owerId,
          text: "Nenhum responsável foi definido para esta tarefa. Você pode assumi-la!",
          type: "Task",
        };
        return createNotification(notification);
      }
      return createdTask && createdTask?.id ? true : false;
    } catch (error) {
      return false;
    }
  }
  public async count() {
    const total = await this.databaseService.taskc.count();
    return {
      text: "Total",
      value: total,
    };
  }
  public async getAll(page: number) {
    const total = await this.count();
    const lastPage = Math.ceil(total.value / serverConstants.paginationLimit);
    try {
      const tasks = await this.databaseService.taskc.findMany({
        select: {
          id: true,
          status: true,
          title: true,
        },
        skip: (page - 1) * serverConstants.paginationLimit,
        take: serverConstants.paginationLimit,
        orderBy: { created: "desc" },
      });
      return {
        data: tasks,
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
  public async getAllByUser(page: number, userId: number) {
    const total = await this.count();
    const lastPage = Math.ceil(total.value / serverConstants.paginationLimit);
    try {
      const tasks = await this.databaseService.taskc.findMany({
        select: {
          id: true,
          status: true,
          title: true,
        },
        skip: (page - 1) * serverConstants.paginationLimit,
        take: serverConstants.paginationLimit,
        orderBy: { created: "desc" },
        where: {
          owner: userId,
        },
      });
      return {
        data: tasks,
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
  
  public async getAllPatter(page: number, pattern: string, userid: number) {
    const total = await this.databaseService.taskc.count({
      where: {
        OR: [
          {
            title: {
              contains: pattern,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: pattern,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const lastPage = Math.ceil(total/ serverConstants.paginationLimit);
    try {
      const tasks = await this.databaseService.taskc.findMany({
        select: {
          id: true,
          status: true,
          title: true,
        },
        where: {
          owner: userid,
          OR: [
            {
              title: {
                contains: pattern,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: pattern,
                mode: "insensitive",
              },
            },
          ],
        },
        skip: (page - 1) * serverConstants.paginationLimit,
        take: serverConstants.paginationLimit,
        orderBy: { created: "desc" },
      });
      return {
        data: tasks,
        lastPage,
        total: total,
        limit: serverConstants.paginationLimit,
        page,
      };
    } catch (error) {
      return {
        data: [],
        lastPage,
        total: total,
        limit: serverConstants.paginationLimit,
        page,
      };
    }
  }
  public async getAllPatterAdimin(page: number, pattern: string) {
    const total = await this.databaseService.taskc.count({
      where: {
        OR: [
          {
            title: {
              contains: pattern,
              mode: "insensitive",
            },
          },
          {
            description: {
              contains: pattern,
              mode: "insensitive",
            },
          },
        ],
      },
    });
    const lastPage = Math.ceil(total / serverConstants.paginationLimit);
    try {
      const tasks = await this.databaseService.taskc.findMany({
        select: {
          id: true,
          status: true,
          title: true,
        },
        where: {
          OR: [
            {
              title: {
                contains: pattern,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: pattern,
                mode: "insensitive",
              },
            },
          ],
        },
        skip: (page - 1) * serverConstants.paginationLimit,
        take: serverConstants.paginationLimit,
        orderBy: { created: "desc" },
      });
      return {
        data: tasks,
        lastPage,
        total: total,
        limit: serverConstants.paginationLimit,
        page,
      };
    } catch (error) {
      return {
        data: [],
        lastPage,
        total: total,
        limit: serverConstants.paginationLimit,
        page,
      };
    }
  }
  public async getAllByStatus(
    page: number,
    status: statusType,
    userId: number
  ) {
    const total = await this.count();
    const lastPage = Math.ceil(total.value / serverConstants.paginationLimit);
    try {
      const tasks = await this.databaseService.taskc.findMany({
        select: {
          id: true,
          status: true,
          title: true,
        },

        skip: (page - 1) * serverConstants.paginationLimit,
        take: serverConstants.paginationLimit,
        where: {
          status: {
            equals: status,
          },
          owner: userId,
        },
      });
      return {
        data: tasks,
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
  public async getByid(id: number) {
    try {
      const tasks = await this.databaseService.taskc.findFirst({
        select: {
          id: true,
          status: true,
          title: true,
          created: true,
          updated: true,
          finished: true,
        },
        where: {
          id,
        },
      });
      const TaskOwner = await this.databaseService.taskc.findFirst({
        select: {
          user: {
            select: {
              name: true,
              lastname: true,
              id: true,
              bio: true,
            },
          },
        },
        where: {
          id,
        },
      });
      return {
        task: tasks,
        user: TaskOwner?.user,
      };
    } catch (error) {
      return {
        data: {},
      };
    }
  }
  public async deleteById(id: number) {
    try {
      const deletedTask = await this.databaseService.taskc.delete({
        select: {
          id: true,
          owner: true,
        },
        where: {
          id,
        },
      });
      if (deletedTask?.owner) {
        const notification: CreateNotificationDto = {
          deeplink: "",
          message: "Uma tarefa foi removida.",
          owner: deletedTask.owner,
          text: "A tarefa que estava atribuída a você foi excluída do sistema. Nenhuma ação é necessária.",
          type: "Task",
        };
        return createNotification(notification);
      }
      return deletedTask && deletedTask?.id ? true : false;
    } catch (error) {
      return false;
    }
  }
  public async update(UpdateTaskDTO: UpdateTaskDTO) {
    try {
      const updatedTask = await this.databaseService.taskc.update({
        data: {
          title: UpdateTaskDTO.title,
          description: UpdateTaskDTO.description,
        },
        where: {
          id: Number(UpdateTaskDTO.id),
        },
        select: {
          id: true,
          owner: true,
        },
      });
      if (updatedTask?.owner) {
        const notification: CreateNotificationDto = {
          deeplink: `${DeepliksPath.TaskTec}/${updatedTask.id}`,
          message: "Uma tarefa foi actualizada.",
          owner: updatedTask.owner,
          text: "A tarefa que estava atribuída a você foi actualizada do sistema. Nenhuma ação é necessária.",
          type: "Task",
        };
        return createNotification(notification);
      }
      return updatedTask && updatedTask?.id ? true : false;
    } catch (error) {
      return false;
    }
  }
}
