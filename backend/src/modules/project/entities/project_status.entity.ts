import { BasicEntity } from 'src/common/basic.entity';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from './project.entity';
import { Task } from 'src/modules/task/entities/task.entity';

@Entity('project_status')
export class ProjectStatus extends BasicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ default: 1 })
  order: number;

  @ManyToOne(() => Project, (project) => project.statuses, { nullable: false })
  project: Project;

  @OneToMany(() => Task, (task) => task.status)
  tasks: Task[];
}
