import { Project } from './project';

export type ProjectStatus = {
  id: number;
  name: string;
  order: number;
  project: Project;
  //   tasks: Task[];
};
