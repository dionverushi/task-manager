import { axiosInstance } from '@utils/axios';
import { IGetAllResponse, IGetOneResponse } from '@utils/queryClient';
import { Project } from 'src/Types/backend/project';

import { CreateProjectParams, ProjectType } from './type';

export const getProjects = (): Promise<IGetAllResponse<Project>> => {
  return axiosInstance.get('project');
};

export const getProjectTypes = (): Promise<IGetAllResponse<Project>> => {
  return axiosInstance.get('project_type');
};

export const createProject = (
  body: CreateProjectParams,
): Promise<IGetOneResponse<Project>> => {
  const data = {
    ...body,
    assignedManagerIds: body.assignedManagerIds.split(','),
  };

  return axiosInstance.post('project', data);
};

export const createProjectType = (
  name: string,
): Promise<IGetOneResponse<ProjectType>> => {
  return axiosInstance.post('project_type', { name });
};
