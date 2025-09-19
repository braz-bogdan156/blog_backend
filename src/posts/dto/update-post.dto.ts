import { IsOptional, IsString, Length } from 'class-validator';

export class UpdatePostDto {
  @IsOptional()
  @IsString()
  @Length(3, 255)
  readonly title?: string;

  @IsOptional()
  @IsString()
  readonly content?: string;
}
