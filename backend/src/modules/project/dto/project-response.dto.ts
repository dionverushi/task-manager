import { ApiProperty } from '@nestjs/swagger';
import { Expose, Type } from 'class-transformer';
import { ProjectType } from 'src/modules/project_type/project_type.entity';

export class ProjectResponseDto {
  @ApiProperty()
  @Expose()
  id: number;

  @ApiProperty()
  @Expose()
  name: string;

  @ApiProperty({ type: () => ProjectType })
  @Type(() => ProjectType)
  @Expose()
  type: ProjectType;
}
