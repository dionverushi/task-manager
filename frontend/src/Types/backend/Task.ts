export enum TaskPriority {
  HIGH = 'HIGH',
  MEDIUM = 'MEDIUM',
  LOW = 'LOW',
}

export enum TaskCategory {
  FRONTEND = 'FRONTEND ',
  BACKEND = 'BACKEND',
}

export type TaskUpdateCreate = {
  name?: string;
  description?: string;
  priority?: TaskPriority;
  deadline?: Date;
  order?: number;
  parentTaskId?: number;
  statusId?: number;
  category?: TaskCategory;
  projectId?: number;
  userId?: number;
};
