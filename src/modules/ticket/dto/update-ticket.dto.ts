import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";

export class UpdateTicketDTO {
  @IsNotEmpty({
    message: "Id deve existir",
  })
  @IsInt({
    message: "O id precisa ser inteiro",
  })
  @Min(1, { message: "O Id precisa ser pelomenos 1 para cima" })
  id: number;
  @IsString({
    message: "Titulo deve ser textual",
  })
  @MinLength(10, {
    message: "Titulo deve conter pelo menos 10 carácteres",
  })
  @MaxLength(100, {
    message: "Titulo deve conter pelo menos 100 carácteres",
  })
  @IsNotEmpty({
    message: "Titulo deve existir",
  })
  title: string;

  @IsString({
    message: "Descrição deve ser textual",
  })
  @IsOptional()
  description: string;
}
