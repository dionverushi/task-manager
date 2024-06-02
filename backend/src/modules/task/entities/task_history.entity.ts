import { BasicEntity } from 'src/common/basic.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Task } from './task.entity';
import { User } from 'src/modules/user/user.entity';
import { ProjectStatus } from 'src/modules/project/entities/project_status.entity';

@Entity('task_history')
export class TaskHistory extends BasicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  taskId: number;

  @Column()
  statusId: number;

  @ManyToOne(() => Task, { nullable: false })
  task: Task;

  @ManyToOne(() => ProjectStatus, { nullable: false })
  status: ProjectStatus;
}
