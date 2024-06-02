import { BasicEntity } from 'src/common/basic.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Project } from '../project/entities/project.entity';
import { UserRole } from 'src/common/constants/user-role.enum';
import { Task } from '../task/entities/task.entity';

@Entity('user')
export class User extends BasicEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column()
  role: UserRole;

  @Column({ unique: true, nullable: true })
  confirmationToken: string;

  @Column({ nullable: true, type: 'timestamptz' })
  confirmedAt: Date;

  @ManyToMany(() => Project, (project) => project.assignedUsers)
  @JoinTable({ name: 'user_project' })
  assignedProjects: Project[];

  @OneToMany(() => Task, (task) => task.assignedUser)
  tasks: Task[];
}
