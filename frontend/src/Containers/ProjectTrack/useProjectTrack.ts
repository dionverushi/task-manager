/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaskBrand } from '@components/TaskTile/types';
import { useState } from 'react';
import { useUpdateTask } from 'src/Services/ProjectStatusTask';
import { Role } from 'src/Types/backend';
import { TaskPriority, TaskUpdateCreate } from 'src/Types/backend/Task';

export type ProjectModules = {
  id: number;
  name: string;
  order?: number;
  tasks: any;
};
const projectModules: ProjectModules[] = [
  {
    id: 1,
    name: 'TO DO',
    tasks: [
      {
        name: 'Update leftover screens and flows - Onboarding final screen update',
        summary: 'App Rebranding',
        taskBrand: TaskBrand.FRONT_END,
        id: 1,
        priority: TaskPriority.HIGH,
        deadline: new Date('2024-06-15T00:00:00Z'),
        assignedUser: {
          id: 'u7',
          firstName: 'Grace',
          lastName: 'Green',
          email: 'grace.green@example.com',
          role: Role.EMPLOYEE,
        },
        dateRange: '2024-06-01 to 2024-06-15',
        timeEstimator: '4 hours',
        storyPoints: 5,
        trackTime: 8, // hours
        description:
          'Complete the final screen update for the onboarding process as part of the app rebranding.',
        subtasks: [
          {
            id: 1,
            name: 'Design final screen',
            summary: 'Design the final screen for onboarding',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.HIGH,
            deadline: new Date('2024-06-10T00:00:00Z'),
            assignedUser: {
              id: 'u10',
              firstName: 'John',
              lastName: 'Doe',
              email: 'john.doe@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-01 to 2024-06-10',
            timeEstimator: '2 hours',
            storyPoints: 3,
            trackTime: 2, // hours
            description: 'Design the final onboarding screen layout.',
          },
          {
            id: 2,
            name: 'Implement final screen',
            summary: 'Implement the final screen for onboarding',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.HIGH,
            deadline: new Date('2024-06-12T00:00:00Z'),
            assignedUser: {
              id: 'u11',
              firstName: 'Jane',
              lastName: 'Smith',
              email: 'jane.smith@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-10 to 2024-06-12',
            timeEstimator: '1.5 hours',
            storyPoints: 2,
            trackTime: 1.5, // hours
            description: 'Implement the designed final onboarding screen.',
          },
          {
            id: 3,
            name: 'Test final screen',
            summary: 'Test the final screen for onboarding',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.MEDIUM,
            deadline: new Date('2024-06-15T00:00:00Z'),
            assignedUser: {
              id: 'u12',
              firstName: 'Emily',
              lastName: 'Johnson',
              email: 'emily.johnson@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-12 to 2024-06-15',
            timeEstimator: '1 hour',
            storyPoints: 1,
            trackTime: 1, // hour
            description:
              'Test the final onboarding screen for bugs and issues.',
          },
        ],
      },
      {
        name: 'Update - Onboarding final screen update',
        summary: 'App Rebrandawding',
        taskBrand: TaskBrand.FRONT_END,
        id: 2,
        priority: TaskPriority.LOW,
        deadline: new Date('2024-07-15T00:00:00Z'),
        assignedUser: {
          id: 'u8',
          firstName: 'Hank',
          lastName: 'Harris',
          email: 'hank.harris@example.com',
          role: Role.EMPLOYEE,
        },
        dateRange: '2024-07-01 to 2024-07-15',
        timeEstimator: '2 hours',
        storyPoints: 3,
        trackTime: 4, // hours
        description:
          'Finalize the update for the onboarding screen to align with the new branding guidelines.',
        subtasks: [
          {
            id: 4,
            name: 'Review branding guidelines',
            summary: 'Review the new branding guidelines',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.LOW,
            deadline: new Date('2024-07-05T00:00:00Z'),
            assignedUser: {
              id: 'u13',
              firstName: 'Luke',
              lastName: 'Carter',
              email: 'luke.carter@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-07-01 to 2024-07-05',
            timeEstimator: '1 hour',
            storyPoints: 1,
            trackTime: 1, // hour
            description: 'Review the new branding guidelines for consistency.',
          },
          {
            id: 5,
            name: 'Update onboarding text',
            summary: 'Update the onboarding screen text',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.LOW,
            deadline: new Date('2024-07-10T00:00:00Z'),
            assignedUser: {
              id: 'u14',
              firstName: 'Mia',
              lastName: 'Clark',
              email: 'mia.clark@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-07-05 to 2024-07-10',
            timeEstimator: '1 hour',
            storyPoints: 2,
            trackTime: 1, // hour
            description:
              'Update the text on the onboarding screen to match the new branding.',
          },
        ],
      },
      {
        name: 'Rebranding',
        summary: 'App Rebraawdawdnding',
        taskBrand: TaskBrand.BACK_END,
        id: 3,
        priority: TaskPriority.MEDIUM,
        deadline: new Date('2024-08-15T00:00:00Z'),
        assignedUser: {
          id: 'u9',
          firstName: 'Ivy',
          lastName: 'Iverson',
          email: 'ivy.iverson@example.com',
          role: Role.EMPLOYEE,
        },
        dateRange: '2024-08-01 to 2024-08-15',
        timeEstimator: '6 hours',
        storyPoints: 8,
        trackTime: 12, // hours
        description:
          'Implement backend changes required for the app rebranding, ensuring compatibility with the new design.',
        subtasks: [
          {
            id: 6,
            name: 'Update API endpoints',
            summary: 'Update the API endpoints for rebranding',
            taskBrand: TaskBrand.BACK_END,
            priority: TaskPriority.MEDIUM,
            deadline: new Date('2024-08-10T00:00:00Z'),
            assignedUser: {
              id: 'u15',
              firstName: 'Nina',
              lastName: 'Davis',
              email: 'nina.davis@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-08-01 to 2024-08-10',
            timeEstimator: '3 hours',
            storyPoints: 4,
            trackTime: 3, // hours
            description:
              'Update the API endpoints to reflect the new branding changes.',
          },
          {
            id: 7,
            name: 'Refactor database schema',
            summary: 'Refactor the database schema for rebranding',
            taskBrand: TaskBrand.BACK_END,
            priority: TaskPriority.MEDIUM,
            deadline: new Date('2024-08-12T00:00:00Z'),
            assignedUser: {
              id: 'u16',
              firstName: 'Oliver',
              lastName: 'Evans',
              email: 'oliver.evans@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-08-10 to 2024-08-12',
            timeEstimator: '2 hours',
            storyPoints: 3,
            trackTime: 2, // hours
            description:
              'Refactor the database schema to accommodate new branding requirements.',
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: 'IN PROGRESS',
    tasks: [
      {
        name: 'Implement user authentication',
        summary: 'User Login & Signup',
        taskBrand: TaskBrand.BACK_END,
        id: 4,
        priority: TaskPriority.HIGH,
        deadline: new Date('2024-06-30T00:00:00Z'),
        assignedUser: {
          id: 'u1',
          firstName: 'Alice',
          lastName: 'Smith',
          email: 'alice.smith@example.com',
          role: Role.EMPLOYEE,
        },
        dateRange: '2024-06-01 to 2024-06-30',
        timeEstimator: '10 hours',
        storyPoints: 13,
        trackTime: 16, // hours
        description:
          'Develop and integrate user authentication features including login and signup functionalities.',
        subtasks: [
          {
            id: 8,
            name: 'Setup authentication server',
            summary: 'Setup the server for authentication',
            taskBrand: TaskBrand.BACK_END,
            priority: TaskPriority.HIGH,
            deadline: new Date('2024-06-10T00:00:00Z'),
            assignedUser: {
              id: 'u17',
              firstName: 'Paul',
              lastName: 'Walker',
              email: 'paul.walker@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-01 to 2024-06-10',
            timeEstimator: '3 hours',
            storyPoints: 5,
            trackTime: 3, // hours
            description:
              'Setup the authentication server for user login and signup.',
          },
          {
            id: 9,
            name: 'Create login endpoint',
            summary: 'Develop the login endpoint',
            taskBrand: TaskBrand.BACK_END,
            priority: TaskPriority.HIGH,
            deadline: new Date('2024-06-20T00:00:00Z'),
            assignedUser: {
              id: 'u18',
              firstName: 'Quinn',
              lastName: 'Wilson',
              email: 'quinn.wilson@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-10 to 2024-06-20',
            timeEstimator: '4 hours',
            storyPoints: 5,
            trackTime: 4, // hours
            description: 'Create the login endpoint for user authentication.',
          },
          {
            id: 10,
            name: 'Create signup endpoint',
            summary: 'Develop the signup endpoint',
            taskBrand: TaskBrand.BACK_END,
            priority: TaskPriority.MEDIUM,
            deadline: new Date('2024-06-25T00:00:00Z'),
            assignedUser: {
              id: 'u19',
              firstName: 'Rachel',
              lastName: 'Adams',
              email: 'rachel.adams@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-20 to 2024-06-25',
            timeEstimator: '3 hours',
            storyPoints: 3,
            trackTime: 3, // hours
            description:
              'Create the signup endpoint for new user registrations.',
          },
        ],
      },
      {
        name: 'Design user profile page',
        summary: 'Profile Page Design',
        taskBrand: TaskBrand.FRONT_END,
        id: 5,
        priority: TaskPriority.MEDIUM,
        deadline: new Date('2024-07-10T00:00:00Z'),
        assignedUser: {
          id: 'u2',
          firstName: 'Bob',
          lastName: 'Brown',
          email: 'bob.brown@example.com',
          role: Role.EMPLOYEE,
        },
        dateRange: '2024-06-15 to 2024-07-10',
        timeEstimator: '5 hours',
        storyPoints: 8,
        trackTime: 10, // hours
        description:
          'Create a user-friendly profile page design that allows users to manage their personal information.',
        subtasks: [
          {
            id: 11,
            name: 'Wireframe design',
            summary: 'Create wireframes for the profile page',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.MEDIUM,
            deadline: new Date('2024-06-20T00:00:00Z'),
            assignedUser: {
              id: 'u20',
              firstName: 'Sophie',
              lastName: 'Taylor',
              email: 'sophie.taylor@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-15 to 2024-06-20',
            timeEstimator: '2 hours',
            storyPoints: 3,
            trackTime: 2, // hours
            description: 'Create wireframe designs for the user profile page.',
          },
          {
            id: 12,
            name: 'High-fidelity design',
            summary: 'Create high-fidelity designs for the profile page',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.MEDIUM,
            deadline: new Date('2024-07-01T00:00:00Z'),
            assignedUser: {
              id: 'u21',
              firstName: 'Tom',
              lastName: 'Miller',
              email: 'tom.miller@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-20 to 2024-07-01',
            timeEstimator: '3 hours',
            storyPoints: 4,
            trackTime: 3, // hours
            description:
              'Create high-fidelity designs for the user profile page.',
          },
          {
            id: 13,
            name: 'Prototype creation',
            summary: 'Create an interactive prototype for the profile page',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.MEDIUM,
            deadline: new Date('2024-07-05T00:00:00Z'),
            assignedUser: {
              id: 'u22',
              firstName: 'Uma',
              lastName: 'Anderson',
              email: 'uma.anderson@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-07-01 to 2024-07-05',
            timeEstimator: '2 hours',
            storyPoints: 2,
            trackTime: 2, // hours
            description:
              'Create an interactive prototype for the user profile page.',
          },
        ],
      },
    ],
  },
  {
    id: 3,
    name: 'BLOCKED',
    tasks: [
      {
        name: 'Resolve API endpoint issues',
        summary: 'Fixing API Errors',
        taskBrand: TaskBrand.BACK_END,
        id: 6,
        priority: TaskPriority.HIGH,
        deadline: new Date('2024-06-25T00:00:00Z'),
        assignedUser: {
          id: 'u3',
          firstName: 'Charlie',
          lastName: 'Clark',
          email: 'charlie.clark@example.com',
          role: Role.EMPLOYEE,
        },
        dateRange: '2024-06-01 to 2024-06-25',
        timeEstimator: '8 hours',
        storyPoints: 10,
        trackTime: 14, // hours
        description:
          'Identify and fix the issues with the API endpoints to ensure proper data flow and communication.',
        subtasks: [
          {
            id: 14,
            name: 'Identify problematic endpoints',
            summary: 'Identify the API endpoints causing issues',
            taskBrand: TaskBrand.BACK_END,
            priority: TaskPriority.HIGH,
            deadline: new Date('2024-06-10T00:00:00Z'),
            assignedUser: {
              id: 'u23',
              firstName: 'Victor',
              lastName: 'Green',
              email: 'victor.green@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-01 to 2024-06-10',
            timeEstimator: '3 hours',
            storyPoints: 4,
            trackTime: 3, // hours
            description:
              'Identify the API endpoints that are causing issues in data flow.',
          },
          {
            id: 15,
            name: 'Fix endpoint issues',
            summary: 'Resolve the issues with API endpoints',
            taskBrand: TaskBrand.BACK_END,
            priority: TaskPriority.HIGH,
            deadline: new Date('2024-06-20T00:00:00Z'),
            assignedUser: {
              id: 'u24',
              firstName: 'Wendy',
              lastName: 'White',
              email: 'wendy.white@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-10 to 2024-06-20',
            timeEstimator: '4 hours',
            storyPoints: 5,
            trackTime: 4, // hours
            description: 'Fix the identified issues with the API endpoints.',
          },
          {
            id: 16,
            name: 'Test endpoints',
            summary: 'Test the API endpoints after fixes',
            taskBrand: TaskBrand.BACK_END,
            priority: TaskPriority.MEDIUM,
            deadline: new Date('2024-06-25T00:00:00Z'),
            assignedUser: {
              id: 'u25',
              firstName: 'Xander',
              lastName: 'Young',
              email: 'xander.young@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-20 to 2024-06-25',
            timeEstimator: '2 hours',
            storyPoints: 3,
            trackTime: 2, // hours
            description:
              'Test the API endpoints to ensure they are working correctly after fixes.',
          },
        ],
      },
    ],
  },
  {
    id: 4,
    name: 'IN REVIEW',
    tasks: [
      {
        name: 'Code review for payment integration',
        summary: 'Reviewing Payment Integration Code',
        taskBrand: TaskBrand.BACK_END,
        id: 7,
        priority: TaskPriority.MEDIUM,
        deadline: new Date('2024-07-01T00:00:00Z'),
        assignedUser: {
          id: 'u4',
          firstName: 'Daisy',
          lastName: 'Morris',
          email: 'daisy.morris@example.com',
          role: Role.EMPLOYEE,
        },
        dateRange: '2024-06-20 to 2024-07-01',
        timeEstimator: '5 hours',
        storyPoints: 8,
        trackTime: 9, // hours
        description:
          'Conduct a thorough code review for the payment integration module to ensure code quality and security.',
        subtasks: [
          {
            id: 17,
            name: 'Review API integrations',
            summary: 'Review the API integrations for payments',
            taskBrand: TaskBrand.BACK_END,
            priority: TaskPriority.MEDIUM,
            deadline: new Date('2024-06-25T00:00:00Z'),
            assignedUser: {
              id: 'u26',
              firstName: 'Yara',
              lastName: 'Parker',
              email: 'yara.parker@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-20 to 2024-06-25',
            timeEstimator: '2 hours',
            storyPoints: 3,
            trackTime: 2, // hours
            description:
              'Review the API integrations to ensure proper functionality for payments.',
          },
          {
            id: 18,
            name: 'Review database operations',
            summary: 'Review the database operations for payments',
            taskBrand: TaskBrand.BACK_END,
            priority: TaskPriority.MEDIUM,
            deadline: new Date('2024-06-28T00:00:00Z'),
            assignedUser: {
              id: 'u27',
              firstName: 'Zara',
              lastName: 'Lee',
              email: 'zara.lee@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-25 to 2024-06-28',
            timeEstimator: '2 hours',
            storyPoints: 3,
            trackTime: 2, // hours
            description:
              'Review the database operations to ensure proper handling of payment data.',
          },
          {
            id: 19,
            name: 'Review frontend integration',
            summary: 'Review the frontend integration for payments',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.LOW,
            deadline: new Date('2024-07-01T00:00:00Z'),
            assignedUser: {
              id: 'u28',
              firstName: 'Owen',
              lastName: 'Scott',
              email: 'owen.scott@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-28 to 2024-07-01',
            timeEstimator: '1 hour',
            storyPoints: 2,
            trackTime: 1, // hour
            description:
              'Review the frontend integration to ensure a seamless user experience for payments.',
          },
        ],
      },
    ],
  },
  {
    id: 5,
    name: 'IN TESTING',
    tasks: [
      {
        name: 'User acceptance testing for new features',
        summary: 'UAT for new features',
        taskBrand: TaskBrand.FRONT_END,
        id: 8,
        priority: TaskPriority.HIGH,
        deadline: new Date('2024-06-15T00:00:00Z'),
        assignedUser: {
          id: 'u5',
          firstName: 'Eve',
          lastName: 'Johnson',
          email: 'eve.johnson@example.com',
          role: Role.EMPLOYEE,
        },
        dateRange: '2024-06-01 to 2024-06-15',
        timeEstimator: '7 hours',
        storyPoints: 10,
        trackTime: 12, // hours
        description:
          'Conduct user acceptance testing for the newly developed features to ensure they meet the requirements.',
        subtasks: [
          {
            id: 20,
            name: 'Write test cases',
            summary: 'Write UAT test cases',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.HIGH,
            deadline: new Date('2024-06-05T00:00:00Z'),
            assignedUser: {
              id: 'u29',
              firstName: 'Fred',
              lastName: 'Hughes',
              email: 'fred.hughes@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-01 to 2024-06-05',
            timeEstimator: '2 hours',
            storyPoints: 3,
            trackTime: 2, // hours
            description: 'Write the test cases for user acceptance testing.',
          },
          {
            id: 21,
            name: 'Execute test cases',
            summary: 'Execute UAT test cases',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.HIGH,
            deadline: new Date('2024-06-10T00:00:00Z'),
            assignedUser: {
              id: 'u30',
              firstName: 'George',
              lastName: 'Edwards',
              email: 'george.edwards@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-05 to 2024-06-10',
            timeEstimator: '3 hours',
            storyPoints: 4,
            trackTime: 3, // hours
            description: 'Execute the test cases for user acceptance testing.',
          },
          {
            id: 22,
            name: 'Log test results',
            summary: 'Log UAT test results',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.MEDIUM,
            deadline: new Date('2024-06-15T00:00:00Z'),
            assignedUser: {
              id: 'u31',
              firstName: 'Harry',
              lastName: 'Norris',
              email: 'harry.norris@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-06-10 to 2024-06-15',
            timeEstimator: '2 hours',
            storyPoints: 3,
            trackTime: 2, // hours
            description: 'Log the results of the user acceptance testing.',
          },
        ],
      },
    ],
  },
  {
    id: 6,
    name: 'DONE',
    tasks: [
      {
        name: 'Deploy initial release',
        summary: 'Deployment of v1.0',
        taskBrand: TaskBrand.FRONT_END,
        id: 9,
        priority: TaskPriority.HIGH,
        deadline: new Date('2024-06-01T00:00:00Z'),
        assignedUser: {
          id: 'u6',
          firstName: 'Frank',
          lastName: 'Foster',
          email: 'frank.foster@example.com',
          role: Role.EMPLOYEE,
        },
        dateRange: '2024-05-01 to 2024-06-01',
        timeEstimator: '12 hours',
        storyPoints: 20,
        trackTime: 24, // hours
        description:
          'Deploy the initial release of the application, ensuring all features are functioning as expected.',
        subtasks: [
          {
            id: 23,
            name: 'Prepare deployment scripts',
            summary: 'Write the scripts for deployment',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.HIGH,
            deadline: new Date('2024-05-15T00:00:00Z'),
            assignedUser: {
              id: 'u32',
              firstName: 'Ian',
              lastName: 'Patterson',
              email: 'ian.patterson@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-05-01 to 2024-05-15',
            timeEstimator: '4 hours',
            storyPoints: 5,
            trackTime: 4, // hours
            description: 'Write the deployment scripts needed for the release.',
          },
          {
            id: 24,
            name: 'Deploy to production',
            summary: 'Deploy the application to production',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.HIGH,
            deadline: new Date('2024-05-25T00:00:00Z'),
            assignedUser: {
              id: 'u33',
              firstName: 'Jake',
              lastName: 'Sullivan',
              email: 'jake.sullivan@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-05-15 to 2024-05-25',
            timeEstimator: '4 hours',
            storyPoints: 5,
            trackTime: 4, // hours
            description:
              'Deploy the application to the production environment.',
          },
          {
            id: 25,
            name: 'Verify deployment',
            summary: 'Ensure everything is working post-deployment',
            taskBrand: TaskBrand.FRONT_END,
            priority: TaskPriority.HIGH,
            deadline: new Date('2024-06-01T00:00:00Z'),
            assignedUser: {
              id: 'u34',
              firstName: 'Karen',
              lastName: 'Reed',
              email: 'karen.reed@example.com',
              role: Role.EMPLOYEE,
            },
            dateRange: '2024-05-25 to 2024-06-01',
            timeEstimator: '4 hours',
            storyPoints: 5,
            trackTime: 4, // hours
            description:
              'Verify that the application is working as expected post-deployment.',
          },
        ],
      },
    ],
  },
];

export const useProjectTrack = () => {
  const [modules, setModules] = useState(projectModules);

  const deleteExistingColumnTask = (
    existingTask: any,
    tasksInPreviousModule: any,
  ) => {
    const newTasks = tasksInPreviousModule.filter(
      (task: any) => task.id !== existingTask.id,
    );
    return newTasks;
  };

  const { mutate: updateTaskMutation } = useUpdateTask({
    onSuccess: () => {
      // Perform any additional actions after a successful update
    },
    onError: (error) => {
      console.error('Failed to update task:', error);
    },
  });

  const onDrop = (
    taskIndex: number,
    currentColumnId: number,
    destColumnId: number,
  ) => {
    if (currentColumnId === destColumnId) {
      return;
    }

    const progressField = modules.find((module) => module.id === destColumnId);
    const tasksInModule = modules.find(
      (module) => module.id === currentColumnId,
    )?.tasks;
    const draggedTask = modules.find((module) => module.id === currentColumnId)
      ?.tasks[taskIndex];

    if (!progressField || !draggedTask) return;

    progressField.tasks.push(draggedTask);

    const newModules = [...modules];
    const moduleIndex = newModules.findIndex(
      (module) => module.id === destColumnId,
    );

    if (moduleIndex !== -1) {
      newModules[moduleIndex] = progressField;
      const previousTasks = deleteExistingColumnTask(
        draggedTask,
        tasksInModule,
      );
      const prevModuleIndex = newModules.findIndex(
        (module) => module.id === currentColumnId,
      );
      if (prevModuleIndex !== -1) {
        newModules[prevModuleIndex].tasks = previousTasks;
      }

      const newTaskUpdate: TaskUpdateCreate = {
        ...draggedTask,
      };

      updateTaskMutation({
        projectId: 1,
        taskId: draggedTask.id,
        body: { ...newTaskUpdate, statusId: destColumnId },
      });

      setModules(newModules);
    }
  };

  return { modules, onDrop };
};
