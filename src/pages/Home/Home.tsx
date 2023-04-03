import React from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import HomeView from './HomeView';

function Home(): JSX.Element {
  const initialData = [
    {
      id: 1,
      name: 'Folder 1',
      folders: [
        {
          id: 2, name: 'Folder 1.1', folders: [], files: [{ id: 13, name: 'File 6' }],
        },
        {
          id: 3,
          name: 'Folder 1.2',
          folders: [
            {
              id: 16, name: 'Folder 1.2.1', folders: [], files: [{ id: 17, name: 'File 6' }],
            },
          ],
          files: [{ id: 14, name: 'File 7' }, { id: 15, name: 'File 8' }],
        },
        {
          id: 4, name: 'Folder 1.3', folders: [], files: [],
        },
      ],
      files: [
        { id: 5, name: 'File 1' },
        { id: 6, name: 'File 2' },
        { id: 7, name: 'File 3' },
      ],
    },
    {
      id: 8,
      name: 'Folder 2',
      folders: [
        { id: 9, name: 'Folder 2.1', folders: [] },
        { id: 10, name: 'Folder 2.2', folders: [] },
      ],
      files: [
        { id: 11, name: 'File 4' },
        { id: 12, name: 'File 5' },
      ],
    },
  ];

  return (
    <DndProvider backend={HTML5Backend}>
      <HomeView initialData={initialData} />
    </DndProvider>
  );
}

export default Home;
