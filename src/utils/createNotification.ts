import dataBase from "src/config/database";
import { CreateNotificationDto } from "src/modules/notification/dto/create-notification.dto";

export async function createNotification(notification: CreateNotificationDto) {
  try {
    const notificationCreated = await dataBase.notification.create({
      data: {
        message: notification.message,
        text: notification.text,
        deeplink: notification.deeplink,
        type: notification.type,
        owner: notification.owner,
        read: false,
      },
      select: {
        id: true,
      },
    });
    return notificationCreated && notificationCreated?.id ? true : false;
  } catch (error) {
    return false;
  }
}
