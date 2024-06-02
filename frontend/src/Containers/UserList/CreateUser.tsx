import { Input } from '@components/Input';
import {
  Button,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
} from '@nextui-org/react';
import { useCreateUserSchema } from '@validations/useCreateUserSchema';
import { useFormik } from 'formik';
import { usePermissions } from 'src/Hooks/usePermissions';
import { useCreateEmployee, useCreateUser } from 'src/Services/User';
import { CreateUserParams } from 'src/Services/User/type';
import { Role } from 'src/Types/backend';

export const CreateUser = ({ onClose }: { onClose: () => void }) => {
  const { mutateAsync: createUser } = useCreateUser();
  const { mutateAsync: createEmployee } = useCreateEmployee();
  const createUserSchema = useCreateUserSchema();
  const { userRole } = usePermissions();

  const formik = useFormik<CreateUserParams>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      role: Role.EMPLOYEE,
    },
    validationSchema: createUserSchema,
    validateOnMount: true,
    onSubmit: (values) =>
      userRole === Role.ADMIN
        ? createUser(values).then(() => onClose())
        : createEmployee(values).then(() => onClose()),
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
      <ModalHeader className="flex flex-col gap-1">
        {userRole === Role.ADMIN ? 'Create User' : 'Create Employee'}
      </ModalHeader>
      <ModalBody>
        <Input
          name="firstName"
          label="First Name"
          value={values.firstName}
          isInvalid={touched.firstName && !!errors.firstName}
          errorMessage={touched.firstName && errors.firstName}
          onChange={onChange}
        />
        <Input
          name="lastName"
          label="Last Name"
          value={values.lastName}
          isInvalid={touched.lastName && !!errors.lastName}
          errorMessage={touched.lastName && errors.lastName}
          onChange={onChange}
        />
        <Input
          name="email"
          label="Email"
          type="email"
          value={values.email}
          isInvalid={touched.email && !!errors.email}
          errorMessage={touched.email && errors.email}
          onChange={onChange}
        />

        {userRole === Role.ADMIN && (
          <Select
            name="role"
            label="User Role"
            value={values.role}
            isInvalid={touched.role && !!errors.role}
            errorMessage={touched.role && errors.role}
            onChange={onChange}
          >
            <SelectItem key={Role.MANAGER}>Manager</SelectItem>
            <SelectItem key={Role.CLIENT}>Client</SelectItem>
          </Select>
        )}
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
