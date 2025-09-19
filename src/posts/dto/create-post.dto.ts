import { IsString, Length } from 'class-validator';

export class CreatePostDto {
  @IsString()
  @Length(3, 255)
  readonly title: string;

  @IsString()
  readonly content: string;
}
