import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { PostModel } from './models/posts.model';
import { CommentModel } from '../comments/models/comments.model';

@Module({
  imports: [SequelizeModule.forFeature([PostModel, CommentModel])],
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
