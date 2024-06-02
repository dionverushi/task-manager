import { Expose } from 'class-transformer';
import {
  BaseEntity,
  CreateDateColumn,
  DeleteDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BasicEntity extends BaseEntity {
  @CreateDateColumn()
  @Expose()
  createdAt?: Date;

  @UpdateDateColumn()
  @Expose()
  updatedAt?: Date;

  @DeleteDateColumn()
  deletedAt?: Date;
}
