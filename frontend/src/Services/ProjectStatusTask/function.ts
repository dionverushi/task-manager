import { TaskTileProps } from '@components/TaskTile/types';
import { axiosInstance } from '@utils/axios';
import { IGetOneResponse } from '@utils/queryClient';
import { TaskUpdateCreate } from 'src/Types/backend/Task';

export const updateTask = (params: {
  projectId: number;
  taskId: number;
  body: TaskUpdateCreate;
}): Promise<IGetOneResponse<TaskTileProps>> => {
  return axiosInstance.put(
    `project/${params.projectId}/task/${params.taskId}`,
    params.body,
  );
};

export const getSingleTask = (
  projectId: number,
  taskId: number,
): Promise<IGetOneResponse<TaskTileProps>> => {
  return axiosInstance.get(`project/${projectId}/task/${taskId}`);
};

export const createTask = (params: {
  projectId: number;
  body: TaskUpdateCreate;
}): Promise<IGetOneResponse<TaskTileProps>> => {
  return axiosInstance.post(`project/${params.projectId}/task/`, params.body);
};
