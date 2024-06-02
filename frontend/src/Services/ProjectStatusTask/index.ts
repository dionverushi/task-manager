// import { axiosInstance } from '@utils/axios';
// import { IGetOneResponse } from '@utils/queryClient';
// // import { IGetAllResponse } from '@utils/queryClient';
// import { Task } from 'src/Types/backend/Task';

import { TaskTileProps } from '@components/TaskTile/types';
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from '@tanstack/react-query';
import { IGetOneResponse, queryClient } from '@utils/queryClient';
// import { UseMutationHookOptions } from '@utils/useMutationTypes';
// import { UseMutationHookOptions } from '@utils/useMutationTypes';
import { UseQueryHookOptions } from '@utils/useQueryTypes';
import { TaskUpdateCreate } from 'src/Types/backend/Task';

import { getSingleTask, updateTask } from './function';

export const useGetSingleTask = (
  projectId: number,
  taskId: number,
  options?: UseQueryHookOptions<IGetOneResponse<TaskTileProps>, Error>,
) => {
  return useQuery({
    queryFn: () => getSingleTask(projectId, taskId),
    queryKey: ['task', taskId],
    ...options,
  });
};

export const useUpdateTask = (
  options?: UseMutationOptions<
    IGetOneResponse<TaskTileProps>,
    Error,
    {
      projectId: number;
      taskId: number;
      body: TaskUpdateCreate;
    }
  >,
) => {
  return useMutation({
    mutationFn: updateTask,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['task'] });
    },
    ...options,
  });
};

// export const useCreateTask = (
//   options?: UseMutationHookOptions<
//     IGetOneResponse<TaskTileProps>,
//     Error,
//     TaskUpdateCreate
//   >,
// ) => {
//   return useMutation({
//     mutationFn: createTask,
//     onSuccess() {
//       queryClient.invalidateQueries({ queryKey: ['task'] });
//     },
//     ...options,
//   });
// };
