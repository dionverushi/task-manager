import { Avatar, AvatarGroup, Card } from '@nextui-org/react';

export type ProjectCardProps = {
  name: string;
  onClick: () => void;
};

export const ProjectCard = ({ name, onClick }: ProjectCardProps) => {
  return (
    <div onClick={onClick}>
      <Card
        isFooterBlurred
        radius="lg"
        className="cursor-pointer flex flex-col gap-7 py-6 px-6 items-center border-none"
        shadow="sm"
      >
        <Avatar size="lg" radius="sm" title={name} />

        <h1 className="text-headline_4 font-bold">{name}</h1>

        <AvatarGroup max={3} isBordered>
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
          <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
        </AvatarGroup>
      </Card>
    </div>
  );
};
