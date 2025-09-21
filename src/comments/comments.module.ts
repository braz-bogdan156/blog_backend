import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { CommentsController } from './comments.controller';
import { CommentsService } from './comments.service';
import { CommentModel } from './models/comments.model';
import { PostModel } from '../posts/models/posts.model';

@Module({
  imports: [SequelizeModule.forFeature([CommentModel, PostModel])],
  controllers: [CommentsController],
  providers: [CommentsService],
})
export class CommentsModule {}
