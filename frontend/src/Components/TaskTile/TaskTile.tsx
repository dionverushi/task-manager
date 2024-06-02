/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container } from '@layouts/container';
import { Row } from '@layouts/row';
import { Text } from '@layouts/typography/Text';
import { BorderRadius } from '@themes/borderRadius';
import { Color } from '@themes/color';
import { HorizontalSpacing } from '@themes/spacing';

import { TaskTileProps } from './types';

// eslint-disable-next-line react-refresh/only-export-components
export const ItemTypes = {
  CARD: 'CARD',
};

export const TaskTile = ({
  taskBrand,
  name,
  summary,
  index,
  currentColumnId,
  onClick,
}: TaskTileProps) => {
  const handleDragStart = (e: any) => {
    const data = JSON.stringify({ index, currentColumnId });
    e.dataTransfer.setData('text/plain', data);
  };

  return (
    <div onClick={onClick}>
      <Container
        draggable
        className="min-h-56 border-l-3 flex flex-col border-yellow-600 gap-3 shadow-shadow3 transition-opacity hover:opacity-85 active:opacity-60"
        padding={HorizontalSpacing.S_M}
        backgroundColor={Color.GREY_3}
        borderRadius={BorderRadius.XS}
        onDragStart={handleDragStart}
      >
        <Row
          className="max-w-80 text-ellipsis overflow-hidden"
          alignItems="flex-start"
          gap={HorizontalSpacing.XS}
        >
          <Text>{taskBrand}:</Text>
          <Text>{name}</Text>
        </Row>

        <Container
          className="pl-1 max-w-full text-ellipsis overflow-hidden rounded-sm"
          backgroundColor={Color.GREEN}
        >
          <Text color={Color.WHITE}>{summary}</Text>
        </Container>

        <Container
          className="w-10 h-10 rounded-full flex items-center justify-center"
          backgroundColor={Color.GREY_2}
        >
          <Text>{taskBrand}</Text>
        </Container>

        <Row justifyContent="space-between">
          <Container>
            <Text>MFS 5672</Text>
          </Container>
          <Text>Avatar</Text>
        </Row>
      </Container>
    </div>
  );
};
