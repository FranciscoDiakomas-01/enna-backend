import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPhoneNumber,
  IsString,
  IsStrongPassword,
  MaxLength,
  MinLength,
} from "class-validator";

export class UpdateUserDTO {
  @IsInt({
    message: "O id precisa ser inteiro",
  })
  @IsNotEmpty({
    message: "O id deve ser inteiro",
  })
  id: number;
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
  @IsString({
    message: "Biografia deve ser textual",
  })
  @IsOptional()
  bio: string;
}

export class UpdateUserDTOCredentials {
  @IsInt({
    message: "O id precisa ser inteiro",
  })
  @IsNotEmpty({
    message: "O id deve ser inteiro",
  })
  id: number;
  @IsString({
    message: "Nome deve ser textual",
  })
  @IsEmail(
    {},
    {
      message: "Email passado deve ser válido",
    }
  )
  @IsNotEmpty({
    message: "Email passado deve existir",
  })
  oldEmail: string;
  @IsEmail(
    {},
    {
      message: "Email actual deve ser válido",
    }
  )
  @IsNotEmpty({
    message: "Email actual deve existir",
  })
  currentEmail: string;
  @IsPhoneNumber("AO", {
    message: "O número passado de telefone deve ser angolano",
  })
  @IsNotEmpty({
    message: "O número passado de telefone deve existir",
  })
  oldTelefone: string;
  @IsPhoneNumber("AO", {
    message: "O número actual de telefone deve ser angolano",
  })
  @IsNotEmpty({
    message: "O número actual de telefone deve existir",
  })
  currentTelefone: string;
  @IsString({ message: "A senha actual deve ser textual" })
  @IsNotEmpty({ message: "A senha actual deve exstir" })
  @MinLength(8, { message: "A senha actual deve conter no mínom 8 caracters" })
  @IsStrongPassword(
    {
      minLength: 8,
      minSymbols: 1,
      minNumbers: 1,
      minLowercase: 1,
      minUppercase: 1,
    },
    { message: "A senha actual precisa ser forte" }
  )
  currentPassowrd: string;

  @IsString({ message: "A senha passada deve ser textual" })
  @IsNotEmpty({ message: "A senha passada deve exstir" })
  @MinLength(8, { message: "A senha passada deve conter no mínom 8 caracters" })
  oldPassword: string;
}
