import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MaxLength,
  MinLength,
} from "class-validator";

export class CreateUserDto {
  @IsString({
    message: "Nome deve ser textual",
  })
  @MinLength(2, {
    message: "Nome deve conter no mínimo 2 carácteres",
  })
  @MaxLength(20, {
    message: "Nome deve conter no máximo 20 caracteres",
  })
  @IsNotEmpty({
    message: "Nome deve existir",
  })
  name: string;

  @IsString({
    message: "sobrenome deve ser textual",
  })
  @MinLength(2, {
    message: "sobrenome deve conter no mínimo 2 carácteres",
  })
  @MaxLength(20, {
    message: "sobrenome deve conter no máximo 20 caracteres",
  })
  @IsNotEmpty({
    message: "sobrenome deve existir",
  })
  lastname: string;

  @IsEmail(
    {},
    {
      message: "Email deve ser válido",
    }
  )
  @IsNotEmpty({
    message: "Email deve existir",
  })
  email: string;

  @IsPhoneNumber("AO", {
    message: "O número de telefone deve ser angolano",
  })
  @IsNotEmpty({
    message: "O número de telefone deve existir",
  })
  tel: string;

  @IsString({
    message: "Biografia deve ser textual",
  })
  @IsOptional()
  bio: string;

  @IsInt({
    message: "Sector deve ser numérico",
  })
  @IsNotEmpty({
    message: "O Sector  deve existir",
  })
  sectorid: number;
}
