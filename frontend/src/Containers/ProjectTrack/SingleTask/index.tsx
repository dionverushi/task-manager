/* eslint-disable simple-import-sort/imports */
/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import { Container } from '@layouts/container';
import { Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import './style.css';
import { useProjectTrack } from '../useProjectTrack';
// import { useToast } from 'react-toastify';
// import { useFormik } from 'formik';
// import {
//   ArrowDownUp,
//   CalendarRangeIcon,
//   DotIcon,
//   Eye,
//   TimerIcon,
//   UserIcon,
// } from 'lucide-react';
// import { useParams } from 'react-router-dom';
// import { useUpdateTask } from 'src/Services/ProjectStatusTask';
// import { useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { TaskPriority } from 'src/Types/backend/Task';

const SingleTask = (props: any) => {
  const { task } = props;
  console.log(task, 'TASK');
  console.log(task.subtasks, 'TASK');

  const [user, setUser] = useState('');

  const [, setSubTasks] = useState(task.subtasks);

  // const [isFormChanged, setIsFormChanged] = useState(false);

  // useEffect(() => {
  //   if (formik.dirty) {
  //     setIsFormChanged(true);
  //   } else {
  //     setIsFormChanged(false);
  //   }
  // }, [formik?.dirty]);

  // const formik = useFormik<any>({
  //   initialValues: { ...task, storyPoints: 0 },
  //   // validationSchema: createUserSchema,
  //   validateOnMount: true,
  //   onSubmit: (dataTransfer: any) => handleFormSubmit(dataTransfer),
  // });

  // const { id } = useParams();

  // const { mutateAsync: updateTask } = useUpdateTask();

  // const { mutateAsync: createTask } = useCreateTask();

  // const handleFormSubmit = async (dataToPost: any) => {
  //   if (!id) {
  //     console.error('Project ID is missing');
  //     return;
  //   }
  //   await updateTask({
  //     projectId: parseInt(id),
  //     taskId: task.id,
  //     body: dataToPost,
  //   });
  // };

  // const {
  //   values,
  //   errors,
  //   touched,
  //   handleChange,
  //   // isValid,
  //   handleBlur,
  //   // submitForm,
  // } = formik;

  //   const { id } = useParams(); it refers to project ID

  const createSubTaskForTask = async () => {
    setSubTasks([...task.subTasks, {}]);
  };

  // const updateTaskAssigne = async (taskId: number) => {
  //   console.log(taskId);
  // };

  // const onChange = (
  //   event:
  //     | string
  //     | React.ChangeEvent<HTMLInputElement>
  //     | React.ChangeEvent<HTMLSelectElement>,
  // ) => {
  //   handleBlur(event);
  //   handleChange(event);
  // };

  //   const fadeIn = keyframes`
  //   from {
  //     opacity: 0;
  //   }
  //   to {
  //     opacity: 1;
  //   }
  // `;

  const [, setBackgroundColor] = useState('#ffffff'); // Initial background color
  useProjectTrack();
  // const [projectData, setProjectData] = useState(modules);
  const [, setRenderForm] = useState(false);

  // Function to generate a random hex color
  const generateRandomColor = () => {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    setBackgroundColor(randomColor);
  };

  // Automatically generate a random color when the component mounts and on every update
  useEffect(() => {
    const intervalId = setInterval(() => {
      generateRandomColor();
    }, 1000); // Change color every second

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  const assignToMe = () => {
    setUser(`Serxhio Bekteshi`);
  };

  return (
    <Container className="  flex flex-col ">
      <h1 className="text-xl font-bold mb-4">{task.name}</h1>

      <div className="mb-6">
        <p className="mt-2">{task?.description}</p>
      </div>

      <div className="status-dashboard">
        <div className="status">
          <span className="icon">🛈</span>
          <span className="label">Status</span>
          <span className="value">{task.taskBrand}</span>
        </div>
        <div className="assignees">
          <span className="icon">🧑</span>
          <span className="label">Assigne</span>
          <span className="value empty">
            {user !== '' || task.assignedUser.firstName === '' ? (
              <>
                {' '}
                {task.assignedUser.firstName +
                  ' ' +
                  task.assignedUser.lastName}{' '}
              </>
            ) : (
              <>
                <div
                  style={{ color: 'blue', textDecoration: 'underline' }}
                  className="assignToMe"
                  onClick={() => assignToMe()}
                >
                  Assign to me
                </div>
              </>
            )}
          </span>
        </div>
        <div className="dates">
          <span className="icon">📅</span>
          <span className="label">Dates </span>
          <span className="value">{task.dateRange}</span>
        </div>
        <div className="priority">
          <span className="icon">⚑</span>
          <span className="label">Priority</span>
          <span className="value empty">{task.priority}</span>
        </div>
        <div className="time-estimate">
          <span className="icon">⏳</span>
          <span className="label">Time Estimate</span>
          <span className="value empty">{task.timeEstimator}</span>
        </div>
        <div className="sprint-points">
          <span className="icon">⚙️</span>
          <span className="label">Sprint Points</span>
          <span className="value empty">{task.storyPoints}</span>
        </div>
        <div className="track-time">
          <span className="icon">⏱️</span>
          <span className="label">Track Time</span>
          <span className="value">{task.time}</span>
        </div>
        {/* <div className="tags">
          <span className="icon">🏷️</span>
          <span className="label">Tags</span>
          <span className="value empty">Empty</span>
        </div> */}
      </div>

      <div className="mt-4 flex justify-center mb-4">
        <Button
          color="primary"
          variant="solid"
          onClick={() => {
            createSubTaskForTask();
            setRenderForm(true);
          }}
        >
          Add Subtask
        </Button>
      </div>

      {task && task.subtasks && task.subtasks.length !== 0 && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            maxHeight: '200px', // Set the maximum height for the scrollable area
            overflowY: 'auto',
          }}
        >
          {task.subtasks.map((t: any) => {
            return (
              <div
                className="outer"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '5px',
                  border: '1px solid lightgrey',
                  marginBottom: '5px',
                  borderRadius: '10px',
                }}
              >
                <div> {t.name} </div>
                <div
                  className="random-div"
                  style={{
                    backgroundColor: 'yellow',
                    borderRadius: '10rem',
                    padding: '0.25rem',
                    paddingInline: '0.75rem',
                  }}
                >
                  {t.assignedUser.firstName + ' ' + t.assignedUser.lastName}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <div className="flex flex-col space-y-4 mt-5">
        {/* <div>
          <label className="block text-sm font-medium text-gray-700 mb-4">
            <Select
              name="priority"
              label="Task Priority"
              value={values.priority}
              isInvalid={touched.priority && !!errors.priority}
              // errorMessage={touched.role && errors.role}
              // onChange={onChange}
            >
              <SelectItem key={TaskPriority.LOW}>{TaskPriority.LOW}</SelectItem>
              <SelectItem key={TaskPriority.MEDIUM}>
                {TaskPriority.MEDIUM}
              </SelectItem>
              <SelectItem key={TaskPriority.HIGH}>
                {TaskPriority.HIGH}
              </SelectItem>
            </Select>
          </label>

          <Input
            name="storyPoints"
            label="Story Points"
            value={values.storyPoints}
            isInvalid={touched.storyPoints && !!errors.storyPoints}
            // errorMessage={touched.storyPoints && errors.storyPoints}
            onChange={onChange}
            type="number"
          />
        </div> */}

        <div>
          <label className="block text-sm font-medium text-gray-700">
            PROJECT
          </label>
        </div>
      </div>
    </Container>
  );
};

export default SingleTask;
