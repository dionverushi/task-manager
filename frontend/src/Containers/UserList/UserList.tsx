import {
  Button,
  Chip,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip,
  useDisclosure,
  User,
} from '@nextui-org/react';
import { getFullName } from '@utils/getFullName';
import { DeleteIcon, EditIcon, EyeIcon } from 'lucide-react';
import React from 'react';
import { useQueryString } from 'src/Hooks/useQueryString';
import { useUsers } from 'src/Services/User';

import { CreateUser } from './CreateUser';

const columns = [
  { name: 'NAME', uid: 'name' },
  { name: 'ROLE', uid: 'role' },
  { name: 'STATUS', uid: 'status' },
  { name: 'ACTIONS', uid: 'actions' },
];

export const UserList = () => {
  const [params, setParams] = useQueryString({ page: 1 });
  const { data: usersRes } = useUsers();
  const { data: users = [], meta } = usersRes || {};
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const {
    isOpen: isDeleteOpen,
    onOpen: onOpenDelete,
    onOpenChange: onOpenDeleteChange,
  } = useDisclosure();

  const onPageChange = (pageNumber: number) => {
    setParams({ page: pageNumber });
  };

  const renderCell = React.useCallback(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (user: any, columnKey: any) => {
      const cellValue = user[columnKey];

      switch (columnKey) {
        case 'name':
          return (
            <User
              avatarProps={{ radius: 'lg', src: user.avatar }}
              description={user.email}
              name={getFullName(user)}
            />
          );
        case 'role':
          return (
            <div className="flex flex-col">
              <p className="text-bold text-sm capitalize">{cellValue}</p>
              <p className="text-bold text-sm capitalize text-default-400">
                {user.team}
              </p>
            </div>
          );
        case 'status':
          return (
            <Chip
              className="capitalize"
              color="success"
              size="sm"
              variant="flat"
            >
              Approved
            </Chip>
          );
        case 'actions':
          return (
            <div className="relative flex items-center gap-2">
              <Tooltip content="Details">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EyeIcon />
                </span>
              </Tooltip>
              <Tooltip content="Edit user">
                <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                  <EditIcon />
                </span>
              </Tooltip>
              <Tooltip color="danger" content="Delete user">
                <span
                  className="text-lg text-danger cursor-pointer active:opacity-50"
                  onClick={onOpenDelete}
                >
                  <DeleteIcon />
                </span>
              </Tooltip>
            </div>
          );
        default:
          return cellValue;
      }
    },
    [onOpenDelete],
  );

  return (
    <div className="h-screen flex-grow flex flex-col gap-4 p-4">
      <h1 className="font-bold">All accounts</h1>

      <div className="flex justify-between">
        <Input className="max-w-72" placeholder="Search users" />
        <Button onClick={onOpen}>Add User</Button>
      </div>

      <Table
        className="flex-1"
        classNames={{ wrapper: 'flex-1' }}
        aria-label="Example table with custom cells"
      >
        <TableHeader columns={columns}>
          {(column) => (
            <TableColumn
              key={column.uid}
              align={column.uid === 'actions' ? 'center' : 'start'}
            >
              {column.name}
            </TableColumn>
          )}
        </TableHeader>
        <TableBody items={users}>
          {(item) => (
            <TableRow key={item.id}>
              {(columnKey) => (
                <TableCell>{renderCell(item, columnKey)}</TableCell>
              )}
            </TableRow>
          )}
        </TableBody>
      </Table>

      <div className="flex w-full justify-center">
        <Pagination
          isCompact
          showControls
          showShadow
          color="secondary"
          page={Number(params.page || 1)}
          total={Number(meta?.pageCount || 1)}
          onChange={onPageChange}
        />
      </div>

      <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => <CreateUser onClose={onClose} />}
        </ModalContent>
      </Modal>

      <Modal
        placement="center"
        isOpen={isDeleteOpen}
        onOpenChange={onOpenDeleteChange}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>
                <h1>Delete User</h1>
              </ModalHeader>
              <ModalBody>
                <p>Are you sure you want to delete this user?</p>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Delete
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
