import { Input } from '@components/Input';
import {
  Autocomplete,
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { getFullName } from '@utils/getFullName';
import { useCreateProjectSchema } from '@validations/useCreateProjectSchema';
import { useFormik } from 'formik';
import { useMemo, useState } from 'react';
import {
  useCreateProject,
  useCreateProjectType,
  useProjectTypes,
} from 'src/Services/Project';
import { CreateProjectParams } from 'src/Services/Project/type';
import { useUsers } from 'src/Services/User';
import { Role } from 'src/Types/backend';

export const CreateProject = ({ onClose }: { onClose: () => void }) => {
  const createProjectSchema = useCreateProjectSchema();
  const { mutateAsync: createProject } = useCreateProject();

  const { data: projectTypesRes } = useProjectTypes();
  const { data: projectTypes = [] } = projectTypesRes || {};

  const { mutate: createProjectType } = useCreateProjectType();

  const [newType, setNewType] = useState('');

  const { data: usersRes } = useUsers();
  const { data: users = [] } = usersRes || {};

  const formik = useFormik<CreateProjectParams>({
    initialValues: {
      name: '',
      typeId: '',
      assignedManagerIds: '',
    },
    validationSchema: createProjectSchema,
    validateOnMount: true,
    onSubmit: (values) => createProject(values).then(() => onClose()),
  });

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    submitForm,
    setFieldValue,
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

  const managers = useMemo(() => {
    return users.filter((user) => user.role === Role.MANAGER);
  }, [users]);

  return (
    <>
      <ModalHeader className="flex flex-col gap-1">Create Project</ModalHeader>
      <ModalBody>
        <Input
          name="name"
          label="Project Title"
          value={values.name}
          isInvalid={touched.name && !!errors.name}
          errorMessage={touched.name && errors.name}
          onChange={onChange}
        />
        <Input
          name="description"
          label="Project Description"
          value={values.description}
          isInvalid={touched.description && !!errors.description}
          errorMessage={touched.description && errors.description}
          onChange={onChange}
        />
        <Autocomplete
          name="typeId"
          label="Project Type"
          value={values.description}
          isInvalid={touched.description && !!errors.description}
          errorMessage={touched.description && errors.description}
          onInputChange={(value) => setNewType(value)}
          listboxProps={{
            bottomContent: (
              <Button
                className="w-full"
                color="primary"
                onClick={() => createProjectType(newType)}
              >
                Create new task type
              </Button>
            ),
          }}
          onSelectionChange={(value) => setFieldValue('typeId', value)}
        >
          {projectTypes.map((type) => {
            return <SelectItem key={type.id}>{type.name}</SelectItem>;
          })}
        </Autocomplete>
        <Select
          selectionMode="multiple"
          name="assignedManagerIds"
          label="Select managers"
          value={values.assignedManagerIds}
          isInvalid={touched.assignedManagerIds && !!errors.assignedManagerIds}
          errorMessage={touched.assignedManagerIds && errors.assignedManagerIds}
          onChange={onChange}
        >
          {managers.map((user) => {
            return <SelectItem key={user.id}>{getFullName(user)}</SelectItem>;
          })}
        </Select>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" variant="light" onPress={onClose}>
          Close
        </Button>
        <Button color="primary" isDisabled={!isValid} onPress={submitForm}>
          Save
        </Button>
      </ModalFooter>
    </>
  );
};
