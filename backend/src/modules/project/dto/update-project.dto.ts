import { ApiProperty, PartialType } from '@nestjs/swagger';
import { CreateProjectDto } from './create-project.dto';
import { IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateProjectDto extends CreateProjectDto {
  @ApiProperty()
  @IsNumber()
  @IsNotEmpty()
  id: number;
}
