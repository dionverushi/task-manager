/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { TaskTile } from '@components/TaskTile';
import { TaskTileProps } from '@components/TaskTile/types';
import { Container } from '@layouts/container';
import { Text } from '@layouts/typography/Text';
import {
  Avatar,
  AvatarGroup,
  Button,
  Divider,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Select,
  SelectItem,
  useDisclosure,
} from '@nextui-org/react';
import { useState } from 'react';

import { CreateTask } from './CreateTask';
import SingleTask from './SingleTask/index';
import { useProjectTrack } from './useProjectTrack';

type ProgressFieldProps = {
  fieldTag: string;
  tasks?: Omit<TaskTileProps, 'index'>[];
  onDrop: (
    taskIndex: number,
    currentColumnId: number,
    destColumnId: number,
  ) => void;
  destColumnId: number;
  currentColumnId: number;
};

//TODO use taskId instead of index
const ProgressField = ({
  fieldTag,
  tasks,
  onDrop,
  destColumnId,
  currentColumnId,
}: ProgressFieldProps) => {
  const { isOpen, onOpenChange } = useDisclosure();
  // const { id } = useParams();
  const [modalTask, setModalTask] = useState<any>(null);

  const handleDrop = (e: any) => {
    e.preventDefault();
    const { index: taskIndex, currentColumnId } = JSON.parse(
      e.dataTransfer.getData('text/plain'),
    );

    onDrop(taskIndex, currentColumnId, destColumnId);
  };

  const handleDragOver = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <Container
        className="min-w-80 p-2"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Container className="w-full p-2 bg-slate-200 rounded-sm">
          <Text>{fieldTag}</Text>
        </Container>
        <Container className="mt-4 w-full flex flex-col gap-3 items-center p-2 min-h-60 bg-slate-200 rounded-sm">
          {tasks?.map((task, index) => (
            <Container key={index} className="cursor-pointer select-none">
              <TaskTile
                onClick={() => {
                  onOpenChange();
                  setModalTask(task);
                }}
                name={task.name}
                taskBrand={task.taskBrand}
                summary={task.summary}
                index={index}
                currentColumnId={currentColumnId}
                id={task.id}
              />
            </Container>
          ))}
        </Container>
      </Container>
      <Modal
        size="5xl"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        placement="center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Task</ModalHeader>
              <ModalBody>
                {' '}
                <SingleTask task={modalTask} />{' '}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button
                  color="primary"
                  onPress={() => console.log('VIA RAEC THOOK FORM')}
                >
                  Submit
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export const ProjectTrack = () => {
  const { modules, onDrop } = useProjectTrack();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const users = [
    {
      id: 1,
      name: 'Tony Reichert',
      role: 'CEO',
      team: 'Management',
      status: 'active',
      age: '29',
      avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/1.png',
      email: 'tony.reichert@example.com',
    },
    {
      id: 2,
      name: 'Zoey Lang',
      role: 'Tech Lead',
      team: 'Development',
      status: 'paused',
      age: '25',
      avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/1.png',
      email: 'zoey.lang@example.com',
    },
    {
      id: 3,
      name: 'Jane Fisher',
      role: 'Sr. Dev',
      team: 'Development',
      status: 'active',
      age: '22',
      avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/2.png',
      email: 'jane.fisher@example.com',
    },
    {
      id: 4,
      name: 'William Howard',
      role: 'C.M.',
      team: 'Marketing',
      status: 'vacation',
      age: '28',
      avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/2.png',
      email: 'william.howard@example.com',
    },
    {
      id: 5,
      name: 'Kristen Copper',
      role: 'S. Manager',
      team: 'Sales',
      status: 'active',
      age: '24',
      avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/female/3.png',
      email: 'kristen.cooper@example.com',
    },
    {
      id: 6,
      name: 'Brian Kim',
      role: 'P. Manager',
      team: 'Management',
      age: '29',
      avatar: 'https://d2u8k2ocievbld.cloudfront.net/memojis/male/3.png',
      email: 'brian.kim@example.com',
      status: 'Active',
    },
  ];

  return (
    <div className="flex flex-col overflow-hidden flex-1">
      <div className="flex justify-between p-5 items-center">
        <h1 className="text-headline_2 font-bold">Tasks</h1>

        <div className="flex gap-5 items-center">
          <Select
            items={users}
            selectionMode="multiple"
            placeholder="Select a user"
            size="sm"
            classNames={{
              base: 'w-40',
              trigger: 'h-12',
            }}
            renderValue={(items) => {
              return (
                <div className="flex gap-2">
                  {items.length > 2 ? (
                    <AvatarGroup className="h-full">
                      {items.map((item) => (
                        <Avatar key={item.data?.id} src={item.data?.avatar} />
                      ))}
                    </AvatarGroup>
                  ) : (
                    items.map((item: any) => (
                      <div key={item.key} className="flex items-center gap-2">
                        <Avatar
                          alt={item.data.name}
                          className="flex-shrink-0"
                          size="sm"
                          src={item.data.avatar}
                        />
                        <div className="flex flex-col">
                          <span>{item.data.name}</span>
                          <span className="text-default-500 text-tiny">
                            ({item.data.email})
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              );
            }}
          >
            {(user) => (
              <SelectItem key={user.id} textValue={user.name}>
                <div className="flex gap-2 items-center">
                  <Avatar
                    alt={user.name}
                    className="flex-shrink-0"
                    size="sm"
                    src={user.avatar}
                  />
                  <div className="flex flex-col">
                    <span className="text-small">{user.name}</span>
                    <span className="text-tiny text-default-400">
                      {user.email}
                    </span>
                  </div>
                </div>
              </SelectItem>
            )}
          </Select>

          <Button className="px-10" color="primary" onClick={onOpen}>
            Create Task
          </Button>
        </div>
      </div>

      <Divider />

      <div className="flex flex-1 p-3 overflow-x-auto overflow-y-auto">
        {modules.map((item) => (
          <ProgressField
            key={item.id}
            fieldTag={item.name}
            tasks={item.tasks}
            destColumnId={item.id}
            currentColumnId={item.id}
            onDrop={onDrop}
          />
        ))}
      </div>

      <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => <CreateTask onClose={onClose} />}
        </ModalContent>
      </Modal>
    </div>
  );
};
