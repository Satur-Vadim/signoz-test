import React from 'react';
import { useDrag } from 'react-dnd';
import { IFileProps } from '../interfaces/IHome';
import ItemTypes from '../../../constants/constants';

const File: React.FC<IFileProps> = ({ file, parentFolder }) => {
  const [, drag] = useDrag({
    type: ItemTypes.FILE,
    item: {
      type: ItemTypes.FILE,
      parentFolder,
      name: file.name,
      id: file.id,
    },
  });

  return (
    <li ref={drag} className="file">
      <span>{file.name}</span>
    </li>
  );
};

export default File;
