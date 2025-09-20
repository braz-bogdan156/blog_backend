import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Post } from './models/posts.model';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { Comment } from '../comments/models/comments.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post) {}

  async create(dto: CreatePostDto): Promise<Post> {
    if (!dto.title || !dto.content) {
      throw new BadRequestException('Title and content are required');
    }
    return await this.postRepository.create(dto);
  }

  async findAll(): Promise<Post[]> {
    const posts = await this.postRepository.findAll({
      include: { model: Comment, as: 'comments' },
    });

    if (!posts.length) {
      throw new NotFoundException('No posts found');
    }

    return posts;
  }

  async findOne(id: number): Promise<Post> {
    if (!id || isNaN(id)) {
      throw new BadRequestException('Invalid post ID');
    }

    const post = await this.postRepository.findByPk(id, {
      include: { model: Comment, as: 'comments' },
    });

    if (!post) {
      throw new NotFoundException(`Post with id=${id} not found`);
    }

    return post;
  }

  async update(id: number, dto: UpdatePostDto): Promise<Post> {
    const post = await this.findOne(id);
    return await post.update(dto);
  }

  async remove(id: number): Promise<void> {
    const post = await this.findOne(id);
    await post.destroy();
  }
}
