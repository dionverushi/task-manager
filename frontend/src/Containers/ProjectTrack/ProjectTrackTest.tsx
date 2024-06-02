// /* eslint-disable no-console */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useState } from 'react';
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

// import { ProjectModules, useProjectTrack } from './useProjectTrack';

// // interface ProgressFieldProps {
// //   col: {
// //     id: number;
// //     fieldTag: string;
// //     tasks?: TaskTileProps[];
// //   };
// // }

// export const ProjectTrackTest = () => {
//   const { projectModules: columnInitialData } = useProjectTrack();
//   const [columns, setColumns] = useState<ProjectModules[]>(columnInitialData);

//   const onDragEnd = (result: any) => {
//     if (!result.destination) return;
//     const { source, destination } = result;

//     const sourceColumnIndex = parseInt(source.droppableId);
//     const destinationColumnIndex = parseInt(destination.droppableId);

//     if (sourceColumnIndex !== destinationColumnIndex) {
//       const sourceColumn = columns[sourceColumnIndex];
//       const destColumn = columns[destinationColumnIndex];
//       const sourceTasks = [...sourceColumn.tasks];
//       const destTasks = [...destColumn.tasks];
//       const [removed] = sourceTasks.splice(source.index, 1);
//       destTasks.splice(destination.index, 0, removed);
//       const newColumns = [...columns];
//       newColumns[sourceColumnIndex] = {
//         ...sourceColumn,
//         tasks: sourceTasks,
//       };
//       newColumns[destinationColumnIndex] = {
//         ...destColumn,
//         tasks: destTasks,
//       };
//       setColumns(newColumns);
//     } else {
//       const column = columns[sourceColumnIndex];
//       const copiedItems = [...column.tasks];
//       const [removed] = copiedItems.splice(source.index, 1);
//       copiedItems.splice(destination.index, 0, removed);
//       const newColumns = [...columns];
//       newColumns[sourceColumnIndex] = {
//         ...column,
//         tasks: copiedItems,
//       };
//       setColumns(newColumns);
//     }
//   };

//   return (
//     <div>
//       <h1 style={{ textAlign: 'center' }}>Jira Board</h1>
//       <div
//         style={{ display: 'flex', justifyContent: 'center', height: '100%' }}
//       >
//         <DragDropContext onDragEnd={onDragEnd}>
//           {columns.map((column, columnIndex) => {
//             return (
//               <div
//                 style={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   alignItems: 'center',
//                 }}
//                 key={column.id.toString()}
//               >
//                 <h2>{column.title}</h2>
//                 <div style={{ margin: 8 }}>
//                   <Droppable
//                     droppableId={columnIndex.toString()}
//                     key={columnIndex.toString()}
//                   >
//                     {(provided, snapshot) => {
//                       return (
//                         <div
//                           {...provided.droppableProps}
//                           ref={provided.innerRef}
//                           style={{
//                             background: snapshot.isDraggingOver
//                               ? 'lightblue'
//                               : 'lightgrey',
//                             padding: 4,
//                             width: 250,
//                             minHeight: 500,
//                           }}
//                         >
//                           {column.tasks.map((item, index) => {
//                             return (
//                               <Draggable
//                                 key={item.id.toString()}
//                                 draggableId={item.id.toString()}
//                                 index={index}
//                               >
//                                 {(provided, snapshot) => {
//                                   return (
//                                     <div
//                                       ref={provided.innerRef}
//                                       {...provided.draggableProps}
//                                       {...provided.dragHandleProps}
//                                       style={{
//                                         userSelect: 'none',
//                                         padding: 16,
//                                         margin: '0 0 8px 0',
//                                         minHeight: '50px',
//                                         backgroundColor: snapshot.isDragging
//                                           ? '#263B4A'
//                                           : '#456C86',
//                                         color: 'white',
//                                         ...provided.draggableProps.style,
//                                       }}
//                                     >
//                                       {item.title}
//                                     </div>
//                                   );
//                                 }}
//                               </Draggable>
//                             );
//                           })}
//                           {provided.placeholder}
//                         </div>
//                       );
//                     }}
//                   </Droppable>
//                 </div>
//               </div>
//             );
//           })}
//         </DragDropContext>
//       </div>
//     </div>
//   );
// };
