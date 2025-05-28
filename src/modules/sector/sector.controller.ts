import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpException,
  HttpStatus,
  Query,
  Put,
} from "@nestjs/common";
import { SectorService } from "./sector.service";
import { CreateSectorDto } from "./dto/create-sector.dto";
import { UpdateSectorDTO } from "./dto/update-sector.dto";

@Controller("sector")
export class SectorController {
  constructor(private readonly sectorService: SectorService) {}
  @Get()
  public async getAllSectors(@Query("search") search: string = "none") {
    if (search == "none") {
      const sectors = await this.sectorService.getAll();
      return {
        data: sectors,
      };
    } else {
      const sectors = await this.sectorService.getByPatter(search);
      return {
        data: sectors,
        search,
      };
    }
  }
  @Get("/count")
  public async getCount() {
    const sectors = await this.sectorService.count();
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
  public async deleteSectorByID(@Param("id") id: string) {
    const sectors = await this.sectorService.deleteById(id);
    if (!sectors) {
      throw new HttpException("Setor não encotrado", HttpStatus.NOT_FOUND);
    }
    return {
      deleted: true,
    };
  }
  @Put()
  public async updateSectorById(@Body() sector: UpdateSectorDTO) {
    const sectorUpdate = await this.sectorService.update(sector);
    if (!sectorUpdate) {
      throw new HttpException(
        "Erro ao actualizar o sector",
        HttpStatus.BAD_REQUEST
      );
    }
    return {
      updated: true,
    };
  }
}
