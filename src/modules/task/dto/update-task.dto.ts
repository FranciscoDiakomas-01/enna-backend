import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";

export class UpdateTaskDTO {
  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  @Min(1)
  id: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(5)
  title: string;

  @IsString()
  @IsOptional()
  description: string;
}
