import { Module } from '@nestjs/common';
import { SectorService } from './sector.service';
import { SectorController } from './sector.controller';
import DatabaseModule from '../database/database.module';

@Module({
  controllers: [SectorController],
  providers: [SectorService],
  exports: [SectorService],
  imports: [DatabaseModule],
})
export class SectorModule {}
