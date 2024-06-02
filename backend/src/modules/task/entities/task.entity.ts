import { BasicEntity } from 'src/common/basic.entity';
import { ProjectStatus } from 'src/modules/project/entities/project_status.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskHistory } from './task_history.entity';
import { User } from 'src/modules/user/user.entity';

export enum TaskPriority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

export enum TaskCategory {
  FRONTEND = 'FRONTEND ',
  BACKEND = 'BACKEND',
}

@Entity('task')
export class Task extends BasicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  priority: TaskPriority;

  @Column({ type: 'timestamptz' })
  deadline: Date;

  @Column()
  order: number;

  @Column()
  parentTaskId: number;

  @Column()
  statusId: number;

  @Column()
  category: TaskCategory;

  @OneToMany(() => Task, (task) => task.parentTask)
  subTasks: Task[];

  @ManyToOne(() => Task, (task) => task.subTasks, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'parentTaskId' })
  parentTask: Task;

  @ManyToOne(() => ProjectStatus, (projectStatus) => projectStatus.tasks, {
    nullable: false,
  })
  @JoinColumn({ name: 'statusId' })
  status: ProjectStatus;

  @OneToMany(() => TaskHistory, (taskHistory) => taskHistory.task)
  taskHistories: TaskHistory[];

  @ManyToOne(() => User, (user) => user.tasks, { nullable: true })
  @JoinColumn({ name: 'assignedUserId' })
  assignedUser: User;
}
