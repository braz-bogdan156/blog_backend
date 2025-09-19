import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { Comment } from '../../comments/models/comments.model';

interface PostCreationAttrs {
  title: string;
  content: string;
}

@Table({ tableName: 'posts' })
export class Post extends Model<Post, PostCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  declare id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  title: string;

  @Column({ type: DataType.TEXT, allowNull: false })
  content: string;

  @HasMany(() => Comment)
  comments: Comment[];
}
