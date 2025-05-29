import { Module } from '@nestjs/common';
import { NotificationService } from './notification.service';
import { NotificationController } from './notification.controller';
import DatabaseModule from '../database/database.module';

@Module({
  controllers: [NotificationController],
  providers: [NotificationService],
  imports : [DatabaseModule]
})
export class NotificationModule {}
