import { Module } from '@nestjs/common';
import { TicketService } from './ticket.service';
import { TicketController } from './ticket.controller';
import DatabaseModule from '../database/database.module';

@Module({
  controllers: [TicketController],
  providers: [TicketService],
  imports : [DatabaseModule]
})
export class TicketModule {}
