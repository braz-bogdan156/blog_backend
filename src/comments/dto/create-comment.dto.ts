import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  readonly text: string;

  @IsNumber()
  readonly postId: number;
}
