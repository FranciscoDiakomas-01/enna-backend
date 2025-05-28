import { Injectable } from "@nestjs/common";
import DatabaseService from "../database/database.service";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class TicketService {
  constructor(
    private readonly databaseservice: DatabaseService,
    private readonly config: ConfigService
  ) {}
  public async getAll(page: number = 1) {}
  public async count() {
    const total = await this.databaseservice.ticket.count();
    return {
      text: "Solicitações",
      value: total,
    };
  }
  public async getById(id: number | string) {
    try {
      const Ticket = await this.databaseservice.ticket.findFirst({
        select: {
          id: true,
          created: true,
          finished: true,
          priority: true,
          status: true,
          title: true,
          updated: true,
          description: true,
          sectorid: true,

          sector: {
            select: {
              title: true,
            },
          },
        },
        where: {
          id: Number(id),
        },
      });
    } catch (error) {
      return { message: "Not found" };
    }
  }
}
