/* eslint-disable @typescript-eslint/no-explicit-any */
import { TasksSummary } from '@components/TasksSummary/TasksSummary';
import { Container } from '@layouts/container';
import { Row } from '@layouts/row';
import { Text } from '@layouts/typography/Text';
import {
  getKeyValue,
  Spinner,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from '@nextui-org/react';
import { useInfiniteScroll } from '@nextui-org/use-infinite-scroll';
import { useAsyncList } from '@react-stately/data';
import { Color } from '@themes/color';
import { HorizontalSpacing } from '@themes/spacing';
import { useState } from 'react';

export const TasksHistory = () => {
  const [selected, setSelected] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [hasMore, setHasMore] = useState(false);

  const list = useAsyncList({
    async load({ signal, cursor }) {
      if (cursor) {
        setIsLoading(false);
      }

      // If no cursor is available, then we're loading the first page.
      // Otherwise, the cursor is the next URL to load, as returned from the previous page.
      const res = await fetch(
        cursor || 'https://swapi.py4e.com/api/people/?search=',
        { signal },
      );
      const json = await res.json();

      setHasMore(json.next !== null);

      return {
        items: json.results,
        cursor: json.next,
      };
    },
  });

  const [loaderRef, scrollerRef] = useInfiniteScroll({
    hasMore,
    onLoadMore: list.loadMore,
  });

  return (
    <Container className="flex-grow h-dvh" padding={HorizontalSpacing.S}>
      <Row
        className="border-b-2 border-slate-200 w-full gap-5 p-1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Container
          className="transition-opacity select-none hover:opacity-85 active:opacity-60"
          onClick={() => setSelected(true)}
          style={
            selected
              ? { borderBottomWidth: 2, borderColor: Color.VIVID_BLUE }
              : {}
          }
        >
          <Text>All Activity</Text>
        </Container>
        <Container
          className="transition-opacity select-none hover:opacity-85 active:opacity-60"
          onClick={() => setSelected(false)}
          style={
            !selected
              ? { borderBottomWidth: 2, borderColor: Color.VIVID_BLUE }
              : {}
          }
        >
          <Text>All Tasks</Text>
        </Container>
      </Row>
      <Container className="mt-4">
        <TasksSummary />
      </Container>
      {selected && (
        <Container className="mt-3">
          <Table
            isHeaderSticky
            aria-label="Example table with infinite pagination"
            baseRef={scrollerRef}
            bottomContent={
              hasMore ? (
                <div className="flex w-full justify-center">
                  <Spinner ref={loaderRef} color="white" />
                </div>
              ) : null
            }
            classNames={{
              base: 'max-h-[520px] overflow-auto',
              table: 'min-h-[400px]',
            }}
          >
            <TableHeader>
              <TableColumn key="name">Date</TableColumn>
              <TableColumn key="height">Task</TableColumn>
              <TableColumn key="mass">Activity</TableColumn>
            </TableHeader>
            <TableBody
              isLoading={isLoading}
              items={list.items}
              loadingContent={<Spinner color="white" />}
            >
              {(item: any) => (
                <TableRow key={item.name}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Container>
      )}
      {!selected && (
        <Container className="mt-3">
          <Table
            isHeaderSticky
            aria-label="Example table with infinite pagination"
            baseRef={scrollerRef}
            bottomContent={
              hasMore ? (
                <div className="flex w-full justify-center">
                  <Spinner ref={loaderRef} color="white" />
                </div>
              ) : null
            }
            classNames={{
              base: 'max-h-[520px] overflow-auto',
              table: 'min-h-[400px]',
            }}
          >
            <TableHeader>
              <TableColumn key="name">Name</TableColumn>
              <TableColumn key="name">Date</TableColumn>
              <TableColumn key="height">Changed By</TableColumn>
              <TableColumn key="mass">Summary</TableColumn>
            </TableHeader>
            <TableBody
              isLoading={isLoading}
              items={list.items}
              loadingContent={<Spinner color="white" />}
            >
              {(item: any) => (
                <TableRow key={item.name}>
                  {(columnKey) => (
                    <TableCell>{getKeyValue(item, columnKey)}</TableCell>
                  )}
                </TableRow>
              )}
            </TableBody>
          </Table>
        </Container>
      )}
    </Container>
  );
};
