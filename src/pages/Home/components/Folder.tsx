import { useDrag, useDrop } from 'react-dnd';
import React from 'react';
import { IFolderProps, IItem } from '../interfaces/IHome';
import ItemTypes from '../../../constants/constants';
import File from './File';

const Folder: React.FC<IFolderProps> = ({
  folder,
  onDropItem,
  parentFolder,
  folders,
}) => {
  const [, dragFolder] = useDrag({
    type: ItemTypes.FOLDER,
    item: { type: ItemTypes.FOLDER, folder, parentFolder },
  });

  const [, drop] = useDrop(
    () => ({
      accept: [ItemTypes.FILE, ItemTypes.FOLDER],
      drop(item: IItem, monitor) {
        const didDrop = monitor.didDrop();
        if (!didDrop) onDropItem(item, folder.id);
      },
    }),
    [onDropItem],
  );

  return (
    <div ref={drop}>
      <div ref={dragFolder} className="folder">
        <span>{folder.name}</span>
      </div>
      <ul className="folder-contents" style={{ margin: 0 }}>
        {folder?.folders?.map((childFolder, index) => (
          <Folder
            key={`${childFolder.name}_${index.toString()}`}
            folder={childFolder}
            parentFolder={folder}
            onDropItem={onDropItem}
            folders={folders}
          />
        ))}
        {folder?.files?.map((file) => (
          <File key={file.name} file={file} parentFolder={folder} />
        ))}
      </ul>
    </div>
  );
};

export default Folder;
