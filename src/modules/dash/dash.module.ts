import { Module } from '@nestjs/common';
import { DashService } from './dash.service';
import { DashController } from './dash.controller';
import { UserModule } from '../user/user.module';
import { TaskModule } from '../task/task.module';
import { TicketModule } from '../ticket/ticket.module';
import { SectorModule } from '../sector/sector.module';
import DatabaseModule from '../database/database.module';

@Module({
  controllers: [DashController],
  providers: [DashService],
  imports : [UserModule , TaskModule , TicketModule , SectorModule , DatabaseModule]
})
export class DashModule {}
