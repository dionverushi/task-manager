import {
  IsDate,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  isDate,
} from 'class-validator';
import { TaskPriority } from '../entities/task.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateTaskHistoryDto {
  @ApiProperty()
  @IsNumber()
  statusId: number;

  @ApiProperty()
  @IsNumber()
  taskId: number;
}
