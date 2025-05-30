import { Injectable } from "@nestjs/common";
import DatabaseService from "./modules/database/database.service";

@Injectable()
export default class AppService {
  constructor(private readonly databaseservice: DatabaseService) {}

  public async getResume() {
    try {
      const users = await this.databaseservice.user.findMany({
        select: {
          id: true,
          lastname: true,
          name : true,
          email: true,
          Taskc: {
            select: {
              status: true,
            },
          },
        },
        where: {
          type: {
            not : "Admin"
          }
        }
      });
      const report = users.map((user) => {
        const statusCount = {
          Completed: 0,
          Pending: 0,
          Cancelled: 0,
          Working: 0,
        };

        user.Taskc.forEach((task) => {
          if (statusCount.hasOwnProperty(task.status)) {
            statusCount[task.status]++;
          }
        });

        return {
          name: `${user.name} ${user.lastname}`,
          email: user.email,
          totalTasks: user.Taskc.length,
          completed: statusCount.Completed,
          pending: statusCount.Pending,
          cancelled: statusCount.Cancelled,
          working: statusCount.Working,
        };
      });
      return report;
    } catch (error) {
      console.error("Erro ao gerar relatório do admin:", error);
      throw error;
    }
  }
}
