import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
  MinLength,
} from "class-validator";

export class CreateTaskDto {
  @IsInt()
  @IsNotEmpty()
  @IsOptional()
  @Min(1)
  ticketid: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  owerId: number;

  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  @MinLength(5)
  title: string;

  @IsString()
  @IsOptional()
  description: string;
}
