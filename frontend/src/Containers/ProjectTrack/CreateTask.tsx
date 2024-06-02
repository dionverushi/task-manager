import { Input } from '@components/Input';
import { TaskBrand } from '@components/TaskTile/types';
import { parseDate } from '@internationalized/date';
import {
  Button,
  DateRangePicker,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { useFormik } from 'formik';
import { TaskPriority } from 'src/Types/backend/Task';

type CreateTaskParams = {
  name: string;
  summary: string;
  taskBrand?: TaskBrand;
  priority: TaskPriority;
  deadline?: Date;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dateRange: any;
  trackTime: number;
  timeEstimator: number;
};

export const CreateTask = ({ onClose }: { onClose: () => void }) => {
  const formik = useFormik<CreateTaskParams>({
    initialValues: {
      name: '',
      summary: '',
      taskBrand: TaskBrand.FRONT_END,
      priority: TaskPriority.MEDIUM,
      deadline: new Date(),
      dateRange: {
        start: parseDate('2024-06-02'),
        end: parseDate('2024-06-02'),
      },
      timeEstimator: 0,
      trackTime: 0,
    },
    validateOnMount: true,
    onSubmit: () => undefined,
  });

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    submitForm,
  } = formik;

  const onChange = (
    event:
      | string
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => {
    handleBlur(event);
    handleChange(event);
  };

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">Create Task</ModalHeader>
      <ModalBody>
        <Input
          name="name"
          label="Task Title"
          value={values.name}
          isInvalid={touched.name && !!errors.name}
          errorMessage={touched.name && errors.name}
          onChange={onChange}
        />
        <Input
          name="summary"
          label="Task Summary"
          value={values.summary}
          isInvalid={touched.summary && !!errors.summary}
          errorMessage={touched.summary && errors.summary}
          onChange={onChange}
        />
        <Select
          name="taskBrand"
          label="Task Brand"
          value={values.taskBrand}
          isInvalid={touched.taskBrand && !!errors.taskBrand}
          errorMessage={touched.taskBrand && errors.taskBrand}
          onChange={onChange}
        >
          <SelectItem key={TaskBrand.FRONT_END}>Front End</SelectItem>
          <SelectItem key={TaskBrand.BACK_END}>Back End</SelectItem>
        </Select>
        <Select
          name="priority"
          label="Task Priority"
          value={values.priority}
          isInvalid={touched.priority && !!errors.priority}
          errorMessage={touched.priority && errors.priority}
          onChange={onChange}
        >
          <SelectItem key={TaskPriority.HIGH}>High</SelectItem>
          <SelectItem key={TaskPriority.MEDIUM}>Medium</SelectItem>
          <SelectItem key={TaskPriority.LOW}>Low</SelectItem>
        </Select>

        <Input
          name="deadline"
          type="date"
          label="Task Deadline"
          value={String(values.deadline)}
          isInvalid={touched.deadline && !!errors.deadline}
          errorMessage={touched.deadline && errors.deadline}
          onChange={onChange}
        />

        <DateRangePicker
          label="Stay duration"
          value={values.dateRange}
          defaultValue={{
            start: parseDate('2024-04-01'),
            end: parseDate('2024-04-08'),
          }}
          onChange={(v) => formik.setFieldValue('dateRange', v)}
        />

        <Input
          name="timeEstimator"
          type="number"
          label="Time Estimator"
          value={String(values.timeEstimator)}
          isInvalid={touched.timeEstimator && !!errors.timeEstimator}
          errorMessage={touched.timeEstimator && errors.timeEstimator}
          onChange={onChange}
        />

        <Input
          name="trackTime"
          type="number"
          label="Track Time"
          value={String(values.trackTime)}
          isInvalid={touched.trackTime && !!errors.trackTime}
          errorMessage={touched.trackTime && errors.trackTime}
          onChange={onChange}
        />
      </ModalBody>
      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
        <Button color="primary" onPress={submitForm} disabled={!isValid}>
          Save
        </Button>
      </ModalFooter>
    </>
  );
};
