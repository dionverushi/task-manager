import { BasicEntity } from 'src/common/basic.entity';
import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProjectStatus } from './project_status.entity';
import { User } from 'src/modules/user/user.entity';
import { ProjectType } from 'src/modules/project_type/project_type.entity';

@Entity('project')
export class Project extends BasicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ nullable: false })
  typeId: number;

  @OneToMany(() => ProjectStatus, (projectStatus) => projectStatus.project)
  statuses: ProjectStatus[];

  @ManyToOne(() => ProjectType, (projectType) => projectType.projects, {
    nullable: false,
  })
  type: ProjectType;

  @ManyToMany(() => User, (user) => user.assignedProjects)
  assignedUsers: User[];
}
