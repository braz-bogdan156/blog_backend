import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { Comment } from './models/comments.model';
import { Post } from '../posts/models/posts.model';

@Module({
  imports: [SequelizeModule.forFeature([Comment, Post])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
