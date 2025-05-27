import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpException,
  HttpStatus,
} from "@nestjs/common";
import { SectorService } from "./sector.service";
import { CreateSectorDto } from "./dto/create-sector.dto";

@Controller("sector")
export class SectorController {
  constructor(private readonly sectorService: SectorService) {}

  @Get()
  public async getAllSectors() {
    const sectors = await this.sectorService.getAll();
    return {
      data: sectors,
    };
  }

  @Post()
  public async createSecor(@Body() sector: CreateSectorDto) {
    const sectorID = await this.sectorService.create(sector);
    if (sectorID == 0) {
      throw new HttpException("Erro ao criar o setor", HttpStatus.BAD_REQUEST);
    } else {
      return {
        id: sectorID,
        created: true,
      };
    }
  }

  @Get("/:id")
  public async getSectorById(@Param("id") id: string) {
    const sectors = await this.sectorService.getById(id);
    if (!sectors?.id) {
      throw new HttpException("Setor não encotrado", HttpStatus.NOT_FOUND);
    }
    return {
      data: sectors,
    };
  }

  @Delete("/:id")
  public async deleteByID(@Param("id") id: string) {
    const sectors = await this.sectorService.deleteById(id);
    if (!sectors) {
      throw new HttpException("Setor não encotrado", HttpStatus.NOT_FOUND);
    }
    return {
      deleted : true
    };
  }
}
