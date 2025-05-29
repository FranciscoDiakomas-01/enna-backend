import { Injectable } from "@nestjs/common";
import { UserService } from "../user/user.service";
import { TaskService } from "../task/task.service";
import { TicketService } from "../ticket/ticket.service";
import { SectorService } from "../sector/sector.service";
import DatabaseService from "../database/database.service";

@Injectable()
export class DashService {
  constructor(
    private readonly userservice: UserService,
    private readonly taskService: TaskService,
    private readonly ticketService: TicketService,
    private readonly sectorservice: SectorService,
    private readonly database: DatabaseService
  ) {}
  public async getAdminDash() {
    const [
      totalUsers,
      totalSectors,
      totalTickets,
      totalTasks,
      completedTasks,
      pendingTasks,
      cancelledTasks,
      workingTasks,
      lastTasks,
    ] = await Promise.all([
      this.userservice.count(),
      this.sectorservice.count(),
      this.ticketService.count(),
      this.taskService.count(),
      this.database.taskc.count({ where: { status: "Completed" } }),
      this.database.taskc.count({ where: { status: "Pending" } }),
      this.database.taskc.count({ where: { status: "Cancelled" } }),
      this.database.taskc.count({ where: { status: "Working" } }),
      this.database.taskc.findMany({
        select: {
          id: true,
          title: true,
          status: true,
        },
        orderBy: {
          created: "desc",
        },
        take: 5, // últimos 5 por exemplo
      }),
    ]);

    return {
      totals: {
        users: totalUsers,
        sectors: totalSectors,
        tickets: totalTickets,
        tasks: totalTasks,
      },
      taskStatusChart: {
        completed: completedTasks,
        pending: pendingTasks,
        working: workingTasks,
        cancelled: cancelledTasks,
      },
      recentTasks: lastTasks,
    };
  }
  public async getUserDash(id: number) {
  try {
    const [
      completedTasks,
      pendingTasks,
      cancelledTasks,
      workingTasks,
      lastTasks,
    ] = await Promise.all([
      this.database.taskc.count({ where: { status: "Completed", owner: id } }),
      this.database.taskc.count({ where: { status: "Pending", owner: id } }),
      this.database.taskc.count({ where: { status: "Cancelled", owner: id } }),
      this.database.taskc.count({ where: { status: "Working", owner: id } }),
      this.database.taskc.findMany({
        select: {
          id: true,
          title: true,
          status: true,
        },
        orderBy: {
          created: "desc",
        },
        take: 5,
        where: {
          owner: id,
        },
      }),
    ]);

    return {
      taskStatusChart: {
        completed: completedTasks,
        pending: pendingTasks,
        working: workingTasks,
        cancelled: cancelledTasks,
      },
      recentTasks: lastTasks,
    };
  } catch (error) {
    return { message : "Eror"}
  }
  }
}
