import { useMutation, useQuery } from '@tanstack/react-query';
import {
  IGetAllResponse,
  IGetOneResponse,
  queryClient,
} from '@utils/queryClient';
import { UseMutationHookOptions } from '@utils/useMutationTypes';
import { UseQueryHookOptions } from '@utils/useQueryTypes';
import { Project } from 'src/Types/backend/project';

import {
  createProject,
  createProjectType,
  getProjects,
  getProjectTypes,
} from './function';
import { CreateProjectParams, ProjectType } from './type';

export const useProjects = (
  options?: UseQueryHookOptions<IGetAllResponse<Project>, Error>,
) => {
  return useQuery({
    queryFn: getProjects,
    queryKey: ['project'],
    ...options,
  });
};

export const useProjectTypes = (
  options?: UseQueryHookOptions<IGetAllResponse<ProjectType>, Error>,
) => {
  return useQuery({
    queryFn: getProjectTypes,
    queryKey: ['project', 'type'],
    ...options,
  });
};

export const useCreateProject = (
  options?: UseMutationHookOptions<
    IGetOneResponse<Project>,
    Error,
    CreateProjectParams
  >,
) => {
  return useMutation({
    mutationFn: createProject,
    onSuccess() {
      queryClient.invalidateQueries({ queryKey: ['project'] });
    },
    ...options,
  });
};

export const useCreateProjectType = (
  options?: UseMutationHookOptions<IGetOneResponse<ProjectType>, Error, string>,
) => {
  return useMutation({
    mutationFn: createProjectType,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['project', 'type'] });
    },
    ...options,
  });
};
