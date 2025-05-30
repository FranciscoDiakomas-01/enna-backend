import { Injectable } from "@nestjs/common";
import DatabaseService from "../database/database.service";
import ISector from "./entities/sector.entity";

@Injectable()
export class SectorService {
  constructor(private readonly databaseService: DatabaseService) {}
  public async count() {
    const TotalSectors = await this.databaseService.sector.count();
    return {
      text: "Sectores",
      value: TotalSectors,
    };
  }
  public async getAll() {
    try {
      const Sectors = (await this.databaseService.sector.findMany({
        select: {
          id: true,
          title: true,
          description: true,
          total: true,
          _count: {
            select: {
              users : true
            }
          }
        },
      })) as ISector[];
      return Sectors;
    } catch (error) {
      return [] as ISector[];
    }
  }
  public async getById(id: number | string) {
    try {
      const Sector = (await this.databaseService.sector.findFirst({
        select: {
          id: true,
          title: true,
          description: true,
          total: true,
        },
        take: 1,

        where: {
          id: Number(id),
        },
      })) as ISector;
      return Sector;
    } catch (error) {
      return {} as ISector;
    }
  }
  public async update({
    id,
    title,
    description,
  }: {
    id: number;
    title: string;
    description: string;
  }) {
    try {
      const Sector = await this.databaseService.sector.update({
        data: {
          title,
          description,
        },
        where: {
          id,
        },
        select: {
          id: true,
        },
      });
      return Sector?.id ? true : false;
    } catch (error) {
      return false;
    }
  }
  public async create({
    title,
    description,
  }: {
    title: string;
    description: string;
  }) {
    try {
      const Sector = await this.databaseService.sector.create({
        data: {
          title,
          description,
        },
        select: {
          id: true,
        },
      });
      return Sector?.id ? Sector?.id : 0;
    } catch (error) {
      return 0;
    }
  }
  public async deleteById(id: number | string) {
    try {
      const Sector = (await this.databaseService.sector.delete({
        select: {
          id: true,
        },
        where: {
          id: Number(id),
        },
      })) as ISector;
      return Sector?.id ? true : false;
    } catch (error) {
      return false;
    }
  }
  public async getByPatter(text: string) {
    try {
      const sectors = await this.databaseService.sector.findMany({
        select: {
          id: true,
          title: true,
          description: true,
          total: true,
        },
        where: {
          OR: [
            {
              title: {
                contains: text,
                mode: "insensitive",
              },
            },
            {
              description: {
                contains: text,
                mode: "insensitive",
              },
            },
          ],
        },
      });
      return sectors as ISector[];
    } catch (error) {
      return [] as ISector[];
    }
  }
  public async incrementTotal(id: number | string) {
    try {
      const Sector = await this.databaseService.sector.findFirst({
        select: {
          id: true,
          total: true,
        },
        take: 1,
        where: {
          id: Number(id),
        },
      });
      if (Sector?.id) {
        const totalUserPerSector = Sector.total;
        await this.databaseService.sector.update({
          data: {
            total: Number(totalUserPerSector) + 1,
          },
          where: {
            id: Number(id),
          },
        });
        return true;
      } else {
        return false;
      }
    } catch (error) {
      return false;
    }
  }
}