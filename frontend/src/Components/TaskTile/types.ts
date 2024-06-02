import { User } from 'src/Types/backend';
import { TaskPriority } from 'src/Types/backend/Task';

export enum TaskBrand {
  FRONT_END = 'FE',
  BACK_END = 'BE',
}

export type TaskTileProps = {
  id: number;
  taskBrand?: TaskBrand;
  name?: string;
  priority?: TaskPriority;
  deadline?: Date;
  summary?: string;
  description?: string;
  index?: number;
  order?: number;
  currentColumnId?: number;
  assignedUser?: User;
  tasks?: TaskTileProps[];
  onClick?: () => void;
};
