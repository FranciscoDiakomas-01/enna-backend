import { Injectable } from "@nestjs/common";
import DatabaseService from "../database/database.service";
import serverConstants from "src/constants/server";

@Injectable()
export class NotificationService {
  constructor(private readonly databaseService: DatabaseService) {}
  public async getMyNotification(id: string | number, page: number) {
    const total = await this.count(Number(id));
    const lastPage = Math.ceil(total / serverConstants.paginationLimit);
    try {
      const notification = await this.databaseService.notification.findMany({
        select: {
          id: true,
          deeplink: true,
          created: true,
          message: true,
          text: true,
          read: true,
          type: true,
        },
        skip: (page - 1) * serverConstants.paginationLimit,
        take: serverConstants.paginationLimit,
        orderBy: [{ read: "desc" }, { created: "desc" }],
      });
      await this.readAllNotification(Number(id))
      return {
        data: notification,
        lastPage,
        total: total,
        limit: serverConstants.paginationLimit,
        page,
      };
    } catch (error) {
      console.log(error);
      return {
        data: [],
        lastPage,
        total,
        limit: serverConstants.paginationLimit,
        page,
      };
    }
  }
  public async count(userId: number) {
    try {
      const notifications = await this.databaseService.notification.count({
        where: {
          owner: userId,
        },
      });
      return notifications;
    } catch (error) {
      return 0;
    }
  }
  public async countUnReaded(userId: number) {
    try {
      const notifications = await this.databaseService.notification.count({
        where: {
          AND: [
            {
              owner: userId,
            },
            {
              read: false,
            },
          ],
        },
      });
      return notifications;
    } catch (error) {
      return 0;
    }
  }
  public async readAllNotification(userId: number) {
    try {
      await this.databaseService.notification.updateMany({
        data: {
          read: true,
        },
        where: {
          owner: userId,
        },
      });
    } catch (error) {
      return false;
    }
  }
}
