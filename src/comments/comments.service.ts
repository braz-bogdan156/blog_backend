import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Comment } from './models/comments.model';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Post } from '../posts/models/posts.model';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment) private commentRepository: typeof Comment,
    @InjectModel(Post) private postRepository: typeof Post,
  ) {}

  async create(dto: CreateCommentDto): Promise<Comment> {
    const post = await this.postRepository.findByPk(dto.postId);
    if (!post)
      throw new NotFoundException(`Post with id=${dto.postId} not found`);

    return await this.commentRepository.create(dto);
  }

  async findByPostId(postId: number): Promise<Comment[]> {
    return await this.commentRepository.findAll({
      where: { postId },
      include: { model: Post },
    });
  }
}
