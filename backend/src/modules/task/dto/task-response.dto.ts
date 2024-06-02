import { Expose, Type } from 'class-transformer';
import { TaskPriority } from '../entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/modules/user/user.entity';

export class StatusTasksResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  order: number;

  @ApiProperty({ type: () => [TaskResponseDto] })
  @Type(() => TaskResponseDto)
  @Expose()
  tasks: TaskResponseDto[];
}

export class TaskResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty()
  @Expose()
  priority: TaskPriority;

  @ApiProperty()
  @Expose()
  deadline: Date;

  @ApiProperty()
  @Expose()
  order: number;

  @ApiProperty({ type: () => User })
  @Type(() => User)
  @Expose()
  assignedUser: User;
}
