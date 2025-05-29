import { notificationType } from "./../../../../generated/prisma/index.d";

export interface CreateNotificationDto {
  owner: number;
  text: string;
  deeplink: string;
  message: string;
  type: notificationType;
}
