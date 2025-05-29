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
import { TicketService } from "./ticket.service";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDTO } from "./dto/update-ticket.dto";
import { priorityType, statusType } from "generated/prisma";

@Controller("ticket")
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  public async create(@Body() createTicketDto: CreateTicketDto) {
    const createTicket = await this.ticketService.create(createTicketDto);
    if (!createTicket) {
      throw new HttpException("Erro ao criar o tikect", HttpStatus.BAD_REQUEST);
    } else {
      throw new HttpException("Ticket Criado com sucesso", HttpStatus.CREATED);
    }
  }

  @Get()
  public async getAllTickets(@Query("page") page: string = "1") {
    const tikects = await this.ticketService.getAll(Number(page));
    return tikects;
  }

  @Get("/status/:status")
  public async getAllTicketByStatus(
    @Param("status") status: statusType,
    @Query("page") page: string = "1"
  ) {
    const tikects = await this.ticketService.getAllByStatus(
      Number(page),
      status
    );
    return tikects;
  }

  @Get("/priority/:priority")
  public async getAllTicketByPriority(
    @Param("priority") priority: priorityType,
    @Query("page") page: string = "1"
  ) {
    const tikects = await this.ticketService.getAllByPriority(
      Number(page),
      priority
    );
    return tikects;
  }

  @Get("/code/:id")
  public async getById(@Param("id") id: string) {
    const tikect = await this.ticketService.getById(Number(id));
    return tikect;
  }

  @Put()
  public async update(@Body() UpdateTicketDTO: UpdateTicketDTO) {
    const updated = await this.ticketService.update(UpdateTicketDTO);
    if (!updated) {
      throw new HttpException(
        "Erro ao actualizar o tikect",
        HttpStatus.BAD_REQUEST
      );
    } else {
      throw new HttpException("Ticket actualizar com sucesso", HttpStatus.OK);
    }
  }

  @Delete(":id")
  public async deleteById(@Param("id") id: string) {
    const deleted = await this.ticketService.deleteById(Number(id));
    if (!deleted) {
      throw new HttpException("Erro ao deletar o tikect", HttpStatus.BAD_REQUEST);
    } else {
      throw new HttpException("Ticket deletado com sucesso", HttpStatus.OK);
    }
  }
}
