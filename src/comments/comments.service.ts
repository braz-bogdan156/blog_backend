import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CommentModel } from './models/comments.model';
import { CreateCommentDto } from './dto/create-comment.dto';
import { PostModel } from '../posts/models/posts.model';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(CommentModel) private commentRepository: typeof CommentModel,
    @InjectModel(PostModel) private postRepository: typeof PostModel,
  ) {}

  async create(dto: CreateCommentDto): Promise<CommentModel> {
    const post = await this.postRepository.findByPk(dto.postId);
    if (!post)
      throw new NotFoundException(`Post with id=${dto.postId} not found`);

    return await this.commentRepository.create(dto);
  }

  async findByPostId(postId: number): Promise<CommentModel[]> {
    return await this.commentRepository.findAll({
      where: { postId },
      include: { model: PostModel, as: 'post' },
    });
  }
}
