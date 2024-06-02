import { IconComponent } from '@components/IconComponent';
import { ProjectCard } from '@components/ProjectCard';
import { Container } from '@layouts/container';
import { Text } from '@layouts/typography/Text';
import { Modal, ModalContent, useDisclosure } from '@nextui-org/react';
import { FontSize } from '@themes/fontSize';
import { Plus } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useProjects } from 'src/Services/Project';

import { CreateProject } from './CreateProject';

export const Projects = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const navigate = useNavigate();
  const { data: projectRes } = useProjects();
  const { data: projects = [] } = projectRes || {};

  return (
    <div className="flex w-full">
      <div className="flex flex-col flex-1 p-8 gap-10">
        <Container>
          <div className="flex items-center pb-4">
            <IconComponent name="project" className="pr-2 size-12" />
            <Text fontSize={FontSize.HEADLINE_3} className="font-bold ">
              My Projects
            </Text>
          </div>
          <div className="h-1 bg-slate-500/30" />
        </Container>

        <div className="flex flex-wrap gap-5">
          {projects.map((project) => {
            return (
              <ProjectCard
                key={project.id}
                name={project.name}
                onClick={() => navigate(`/projects/${project.id}`)}
              />
            );
          })}
          <div
            className="cursor-pointer flex items-center h-full min-h-52 px-20 border-2 border-slate-300 text-slate-500 border-dashed rounded"
            onClick={onOpen}
          >
            <Plus />
          </div>
        </div>

        <Modal placement="center" isOpen={isOpen} onOpenChange={onOpenChange}>
          <ModalContent>
            {(onClose) => <CreateProject onClose={onClose} />}
          </ModalContent>
        </Modal>
      </div>
    </div>
  );
};
