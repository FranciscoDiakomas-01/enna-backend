import { Controller, Get, Param, Query } from "@nestjs/common";
import { NotificationService } from "./notification.service";

@Controller("notification")
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get("/:id")
  public async getMyNotification(
    @Param("id") id: string,
    @Query("page") page: string = "1"
  ) {
    const notifications = await this.notificationService.getMyNotification(
      Number(id),
      Number(page)
    );
    return notifications;
  }
  @Get("/count/:id")
  public async getNotificationCount(@Param("id") id: string) {
    const notifications = await this.notificationService.countUnReaded(Number(id));
    return {
      notifications,
    };
  }
}
