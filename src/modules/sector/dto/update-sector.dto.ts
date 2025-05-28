import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateSectorDTO {
  @IsString({
    message: "O título deve ser textual",
  })
  @MinLength(2, {
    message: "O título deve conter pelo menos dois caracteres",
  })
  @MaxLength(50, { message: "O título deve conter pelo menos 50 caracteres" })
  @IsNotEmpty()
  title: string;

  @IsString({
    message: "A descrição deve ser textual",
  })
  description: string;

  @IsNotEmpty({ message: "Id deve existir" })
  @IsInt({
    message: "Id deve ser inteiro",
  })
  id: number;
}
