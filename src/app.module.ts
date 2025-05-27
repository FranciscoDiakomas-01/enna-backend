import { Module } from '@nestjs/common';
import { UserModule } from './modules/user/user.module';
import { TaskModule } from './modules/task/task.module';
import { TicketModule } from './modules/ticket/ticket.module';
import { NotificationModule } from './modules/notification/notification.module';
import { SectorModule } from './modules/sector/sector.module';
import  DatabaseModule  from './modules/database/database.module';

@Module({
  imports: [
    UserModule,
    TaskModule,
    TicketModule,
    NotificationModule,
    SectorModule,
    DatabaseModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
