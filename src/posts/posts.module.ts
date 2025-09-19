import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from './models/posts.model';
import { Comment } from '../comments/models/comments.model';

@Module({
  imports: [SequelizeModule.forFeature([Post, Comment])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
