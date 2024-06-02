import { BasicEntity } from 'src/common/basic.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Project } from '../project/entities/project.entity';

@Entity('project_type')
export class ProjectType extends BasicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Project, (project) => project.type)
  projects: Project[];
}
