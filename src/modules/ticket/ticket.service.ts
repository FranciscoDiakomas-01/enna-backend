
import { Injectable } from "@nestjs/common";
import DatabaseService from "../database/database.service";
import { ConfigService } from "@nestjs/config";
import serverConstants from "src/constants/server";
import { priorityType, statusType } from "generated/prisma";
import { UpdateTicketDTO } from "./dto/update-ticket.dto";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { createNotification } from "src/utils/createNotification";
import { CreateNotificationDto } from "../notification/dto/create-notification.dto";
import DeepliksPath from "src/constants/frontend";

@Injectable()
export class TicketService {
  constructor(
    private readonly databaseservice: DatabaseService,
    private readonly config: ConfigService
  ) {}
  public async getAll(page: number) {
    const total = await this.count();
    const lastPage = Math.ceil(total.value / serverConstants.paginationLimit);
    try {
      const tickets = await this.databaseservice.ticket.findMany({
        select: {
          id: true,
          status: true,
          priority: true,
          title: true,
        },
        skip: (page - 1) * serverConstants.paginationLimit,
        take: serverConstants.paginationLimit,
        orderBy: { priority: "desc" },
      });
      return {
        data: tickets,
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
  public async getAllByStatus(page: number, status: statusType) {
    const total = await this.count();
    const lastPage = Math.ceil(total.value / serverConstants.paginationLimit);
    try {
      const tickets = await this.databaseservice.ticket.findMany({
        select: {
          id: true,
          status: true,
          priority: true,
          title: true,
        },
        skip: (page - 1) * serverConstants.paginationLimit,
        take: serverConstants.paginationLimit,
        where: {
          status: {
            equals: status,
          },
        },
      });
      return {
        data: tickets,
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
  public async getAllByPriority(page: number, priority: priorityType) {
    const total = await this.count();
    const lastPage = Math.ceil(total.value / serverConstants.paginationLimit);
    try {
      const tickets = await this.databaseservice.ticket.findMany({
        select: {
          id: true,
          status: true,
          priority: true,
          title: true,
        },
        skip: (page - 1) * serverConstants.paginationLimit,
        take: serverConstants.paginationLimit,
        where: {
          priority: {
            equals: priority,
          },
        },
      });
      return {
        data: tickets,
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
  public async count() {
    const total = await this.databaseservice.ticket.count();
    return {
      text: "Solicitações",
      value: total,
    };
  }
  public async getById(id: number | string) {
    try {
      const Ticket = await this.databaseservice.ticket.findFirst({
        select: {
          id: true,
          created: true,
          finished: true,
          priority: true,
          status: true,
          title: true,
          updated: true,
          description: true,
        },
        where: {
          id: Number(id),
        },
      });
      const TasksByTicket = await this.databaseservice.taskc.findMany({
        select: {
          user: {
            select: {
              name: true,
              lastname: true,
              email: true,
              id: true,
            },
          },
          status: true,
          updated: true,
          id: true,
        },
        where: {
          ticketId: Number(id),
        },
      });
      return {
        ticket: Ticket,
        tasks: TasksByTicket,
        message: !Ticket ? "Not found" : "Ticket found",
      };
    } catch (error) {
      return { message: "Not found" };
    }
  }
  public async deleteById(id: number | string) {
    try {
      const Ticket = await this.databaseservice.ticket.delete({
        select: {
          id: true,
        },
        where: {
          id: Number(id),
        },
      });
      return Ticket && Ticket?.id ? true : false;
    } catch (error) {
      return false;
    }
  }
  public async update(ticketToUpdate: UpdateTicketDTO) {
    try {
      const updatedTicket = await this.databaseservice.ticket.update({
        data: {
          title: ticketToUpdate.title,
          description: ticketToUpdate.description,
        },
        select: {
          sectorid: true,
        },
        where: {
          id: Number(ticketToUpdate.id),
        },
      });
      return updatedTicket && updatedTicket?.sectorid ? true : false;
    } catch (error) {
      return false;
    }
  }
  public async create(ticket: CreateTicketDto) {
    try {
      const createTicket = await this.databaseservice.ticket.create({
        data: {
          title: ticket.title,
          description: ticket.description,
          priority: ticket.priotity,
          status: "Pending",
          finished: ticket.fineshed,
          sectorid: ticket.sectorid,
        },
        select: {
          id: true,
        },
      });
      await this.atributeTaskByTicket(
        ticket.sectorid,
        ticket.title,
        ticket.description,
        createTicket.id
      );
      return createTicket && createTicket?.id ? true : false;
    } catch (error) {
      return false;
    }
  }
  public async atributeTaskByTicket(
    sectorid: number,
    taskTitle: string,
    taskDescription: string,
    ticketId: number
  ) {
    try {
      const usersBySector = await this.databaseservice.user.findMany({
        select: {
          id: true,
        },
        where: {
          sectorid,
        },
      });
      if (usersBySector?.length == 0) {
        const createTaskForAnyOne = await this.databaseservice.taskc.create({
          data: {
            title: taskTitle,
            description: taskDescription,
            ticketId: ticketId,
          },
          select: {
            id: true,
          },
        });
        const users = await this.databaseservice.user.findMany({
          select: {
            id: true,
          },
        });
        await Promise.all(
          users.map((user) => {
            const notification: CreateNotificationDto = {
              deeplink: `${DeepliksPath.TaskTec}/${createTaskForAnyOne.id}`,
              message: "Uma nova tarefa está disponível.",
              owner: user.id,
              text: "Nenhum responsável foi definido para esta tarefa. Você pode assumi-la!",
              type: "Task",
            };
            return createNotification(notification);
          })
        );
        return createTaskForAnyOne && createTaskForAnyOne?.id ? true : false;
      } else if (usersBySector?.length == 1) {
        const UniUserId = usersBySector[0].id;
        const createdTaskForUniqueUser =
          await this.databaseservice.taskc.create({
            data: {
              title: taskTitle,
              description: taskDescription,
              ticketId: ticketId,
              owner: UniUserId,
            },
            select: {
              id: true,
            },
          });
        const notification: CreateNotificationDto = {
          deeplink: `${DeepliksPath.TaskTec}/${createdTaskForUniqueUser.id}`,
          message: "Você recebeu uma nova tarefa.",
          owner: UniUserId,
          text: "Uma nova tarefa foi atribuída a você com base em um ticket do setor. Verifique os detalhes e inicie o quanto antes.",
          type: "Task",
        };
        await createNotification(notification);
        return createdTaskForUniqueUser && createdTaskForUniqueUser?.id
          ? true
          : false;
      } else {
        const usersWithCount = await Promise.all(
          usersBySector.map(async (user) => {
            const taskCount = await this.databaseservice.taskc.count({
              where: {
                owner: user.id,
                status: {
                  in: ["Pending"],
                },
              },
            });
            return { id: user.id, count: taskCount };
          })
        );
        const minCount = Math.min(...usersWithCount.map((u) => u.count));
        const lessBusyUsers = usersWithCount.filter(
          (u) => u.count === minCount
        );
        const selectedUser = lessBusyUsers[Math.floor(Math.random() * lessBusyUsers.length)];
        const createdTask = await this.databaseservice.taskc.create({
          data: {
            title: taskTitle,
            description: taskDescription,
            ticketId: ticketId,
            owner: selectedUser.id,
          },
          select: { id: true },
        });
        const notification: CreateNotificationDto = {
          deeplink: `${DeepliksPath.TaskTec}/${createdTask.id}`,
          message: "Você recebeu uma nova tarefa.",
          owner: selectedUser?.id,
          text: "Uma nova tarefa foi atribuída a você com base em um ticket do setor. Verifique os detalhes e inicie o quanto antes.",
          type: "Task",
        };
        await createNotification(notification);
        return createdTask && createdTask?.id ? true : false;
      }
    } catch (error) {
      return false;
    }
  }
}
