import {
  Table,
  Column,
  Model,
  DataType,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { PostModel } from '../../posts/models/posts.model';

interface CommentCreationAttrs {
  text: string;
  postId: number;
}

@Table({ tableName: 'comments' })
export class CommentModel extends Model<CommentModel, CommentCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.TEXT, allowNull: false })
  text: string;

  @ForeignKey(() => PostModel)
  @Column({ type: DataType.INTEGER, allowNull: false })
  postId: number;

  @BelongsTo(() => PostModel)
  post: PostModel;
}
