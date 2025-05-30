import { IsEnum, IsInt, IsNotEmpty } from "class-validator";
import { statusType } from "generated/prisma";

export class UpdateTaskStatusDto {
  @IsEnum(statusType, { message: "Status inválido" })
  @IsNotEmpty()
  status: statusType;
  @IsInt()
  @IsNotEmpty()
  id: number;
}
