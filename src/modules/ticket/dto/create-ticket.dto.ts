import {
  IsDate,
  IsEnum,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";
import { priorityType } from "generated/prisma";

import { Type } from "class-transformer";

export class CreateTicketDto {
  @IsNotEmpty({
    message: "sector deve existir",
  })
  @IsInt({
    message: "O sector precisa ser inteiro",
  })
  @Min(1, { message: "O sector precisa ser pelomenos 1 para cima" })
  sectorid: number;

  @IsEnum(priorityType, {
    message: "Prioridade inválida",
  })
  @IsNotEmpty({
    message: "Prioridade deve existir",
  })
  priotity: priorityType;

  @Type(() => Date)
  @IsDate({
    message: "Data inválida",
  })
  @IsNotEmpty({
    message: "Data deve existir",
  })
  fineshed: Date;

  @IsNotEmpty({
    message: "Titulo deve existir",
  })
  @IsString({
    message: "Titulo deve ser textual",
  })
  @MinLength(10, {
    message: "Titulo deve conter pelo menos 10 carácteres",
  })
  @MaxLength(100, {
    message: "Titulo deve conter pelo menos 100 carácteres",
  })
  title: string;

  @IsString({
    message: "Descrição deve ser textual",
  })
  @IsOptional()
  description: string;
}
