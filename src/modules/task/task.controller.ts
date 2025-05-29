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
import { TaskService } from "./task.service";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDTO } from "./dto/update-task.dto";
import { statusType } from "generated/prisma";

@Controller("task")
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post()
  public async create(@Body() createTaskDto: CreateTaskDto) {
    const created = await this.taskService.create(createTaskDto);
    if (!created) {
      throw new HttpException("Erro ao criar a tarefa", HttpStatus.BAD_REQUEST);
    } else {
      throw new HttpException("tarefa craida com sucesso", HttpStatus.CREATED);
    }
  }
  @Get()
  public async getAlltask(
    @Query("page") page: string = "1",
    @Query("search") search: string = "none"
  ) {
    if (search != "none") {
      const taskUser = await this.taskService.getAllPatterAdimin(
        Number(page),
        search,
      );
      return taskUser;
    }
    const taskAdmin = await this.taskService.getAll(Number(page));
    return taskAdmin;
  }

  @Get("/user/:userid")
  public async getAllByUserId(
    @Query("page") page: string = "1",
    @Param("userid") id: string,
    @Query("search") search: string = "none"
  ) {
    if (search != "none") {
      const taskUser = await this.taskService.getAllPatter(
        Number(page),
        search,
        +id
      );
      return taskUser;
    }
    const taskUser = await this.taskService.getAllByUser(Number(page), +id);
    return taskUser;
  }
  @Get("/status/:status/:userid")
  public async getByStatus(
    @Query("page") page: string = "1",
    @Param("status") status: statusType,
    @Param("userid") id: string
  ) {
    const taskUser = await this.taskService.getAllByStatus(
      Number(page),
      status,
      +id
    );
    return taskUser;
  }

  @Get(":id")
  public async getById(@Param("id") id: string) {
    const taskById = await this.taskService.getByid(+id);
    return taskById;
  }

  @Put()
  public async update(@Body() UpdateTaskDTO: UpdateTaskDTO) {
    const updated = await this.taskService.update(UpdateTaskDTO);
    if (!updated) {
      throw new HttpException(
        "Erro ao editar a tarefa",
        HttpStatus.BAD_REQUEST
      );
    } else {
      throw new HttpException("tarefa editada com sucesso", HttpStatus.CREATED);
    }
  }

  @Delete(":id")
  public async remove(@Param("id") id: string) {
    const deleted = await this.taskService.deleteById(+id);
    if (!deleted) {
      throw new HttpException(
        "Erro ao eliminar a tarefa",
        HttpStatus.BAD_REQUEST
      );
    } else {
      throw new HttpException("tarefa eliminada com sucesso", HttpStatus.OK);
    }
  }
}
