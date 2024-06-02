import { Chip, Divider, User } from '@nextui-org/react';

export const ProjectOverview = () => {
  const link = 'https://avatars.githubusercontent.com/u/30373425?v=4';

  return (
    <div className="h-screen items-center w-full flex justify-center">
      <div className="flex gap-10 w-4/6 h-3/5">
        <div className="flex flex-col gap-10">
          <div className="flex justify-between items-center">
            <h1 className="text-headline_2 font-bold">Title</h1>
            <Chip>Enterprise</Chip>
          </div>

          <div>
            <h2 className="text-headline_4 font-bold">Requirements</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              consequatur quo nihil blanditiis dolores adipisci voluptatem
              repellendus nulla culpa sit delectus neque aperiam quibusdam cum
              nemo, sequi aliquam quod totam!
            </p>
          </div>
        </div>

        <div>
          <Divider orientation="vertical" />
        </div>

        <div className="flex flex-col gap-5 flex-1">
          <h2 className="text-headline_4 font-bold whitespace-nowrap">
            Project Members
          </h2>
          <div className="flex flex-col gap-5">
            <User
              name="Junior Garcia"
              avatarProps={{
                src: link,
              }}
            />
            <User
              name="Junior Garcia"
              avatarProps={{
                src: link,
              }}
            />
            <User
              name="Junior Garcia"
              avatarProps={{
                src: link,
              }}
            />
            <User
              name="Junior Garcia"
              avatarProps={{
                src: link,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
