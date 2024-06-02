import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  isDate,
} from 'class-validator';
import { TaskCategory, TaskPriority } from '../entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskDto {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty()
  @IsEnum(TaskPriority)
  @IsOptional()
  priority: TaskPriority = TaskPriority.MEDIUM;

  @ApiProperty()
  @IsEnum(TaskCategory)
  category: TaskCategory;

  @ApiProperty()
  @IsDate()
  @IsNotEmpty()
  deadline: Date;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  order?: number = 0;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  parentId?: number = null;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  statusId?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  projectId?: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  userId?: number;
}
