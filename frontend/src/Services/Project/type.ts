export type ProjectType = {
  id: number;
  name: string;
};

export type CreateProjectParams = {
  name: string;
  typeId: string;
  description?: string;
  assignedManagerIds: string;
};
