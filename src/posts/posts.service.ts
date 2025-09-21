import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PostModel } from './models/posts.model';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { CommentModel } from '../comments/models/comments.model';

@Injectable()
export class PostsService {
  constructor(
    @InjectModel(PostModel) private postRepository: typeof PostModel,
  ) {}

  async create(dto: CreatePostDto): Promise<PostModel> {
    if (!dto.title || !dto.content) {
      throw new BadRequestException('Title and content are required');
    }
    return await this.postRepository.create(dto);
  }

  async findAll(): Promise<PostModel[]> {
    const posts = await this.postRepository.findAll({
      include: { model: CommentModel, as: 'comments' },
    });

    if (!posts.length) {
      throw new NotFoundException('No posts found');
    }

    return posts;
  }

  async findOne(id: number): Promise<PostModel> {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid post ID');
    }

    const post = await this.postRepository.findByPk(id, {
      include: { model: CommentModel, as: 'comments' },
    });

    if (!post) {
      throw new NotFoundException(`Post with id=${id} not found`);
    }

    return post;
  }

  async update(id: number, dto: UpdatePostDto): Promise<PostModel> {
    const post = await this.findOne(id);
    return await post.update(dto);
  }

  async remove(id: number): Promise<void> {
    const post = await this.findOne(id);
    await post.destroy();
  }
}
