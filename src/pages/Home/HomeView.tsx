import React, { useState } from 'react';
import {
  IFindAndRemoveItemById,
  IHandleDropItem,
  IHomeProps,
  IPasteToFolder,
} from './interfaces/IHome';
import ItemTypes from '../../constants/constants';
import Folder from './components/Folder';

const FileStructure: React.FC<IHomeProps> = ({ initialData }) => {
  const [folders, setFolders] = useState(initialData);

  const findAndRemoveItemById: IFindAndRemoveItemById = (data, movedItem, toFolderId) => {
    let isItemRemoved = false;
    const newData = data.map((item) => {
      let newItem = { ...item };
      if (movedItem.type === ItemTypes.FOLDER) {
        if (
          item.id === movedItem.folder.id
          && movedItem?.parentFolder?.id !== toFolderId // If dropped a folder into the same folder where it was
          && movedItem.folder.id !== toFolderId // If you dropped the folder into itself
        ) {
          isItemRemoved = true;
          newItem = { id: 0, name: '' }; // Delete item
        }
      }

      // If there are other folders in the folder, search in them
      if (item.folders && !isItemRemoved) {
        const { removed, newData: nextFolders } = findAndRemoveItemById(item.folders, movedItem, toFolderId);
        if (removed) {
          isItemRemoved = true;
        }
        newItem.folders = nextFolders;
      }

      if (movedItem.type === ItemTypes.FILE && item.files && item.id !== toFolderId) {
        newItem.files = item.files.filter((file) => {
          if (file.id === movedItem?.id) {
            isItemRemoved = true;
            return false; // Delete item
          }
          return true;
        });
      }
      return newItem;
    }).filter((item) => item?.id);

    return { removed: isItemRemoved, newData };
  };

  const pasteToFolder: IPasteToFolder = (data, movedItem, toFolderId) => (
    data.map((item) => {
      const newItem = { ...item };
      if (item.id === toFolderId) { // Found the folder where you want to insert the item
        if (movedItem.type === ItemTypes.FOLDER) {
          return {
            ...newItem,
            folders: [
              ...item?.folders || [],
              movedItem.folder],
          };
        }

        // If movedItem.type = file
        return {
          ...newItem,
          files: [
            ...item?.files || [],
            { id: movedItem.id, name: movedItem.name },
          ],
        };
      }
      // If there are other folders in the folder, look in them
      if (item.folders) {
        newItem.folders = pasteToFolder(item.folders, movedItem, toFolderId);
      }
      return newItem;
    })
  );

  const handleDropItem: IHandleDropItem = (item, toFolderId) => {
    const { removed, newData } = findAndRemoveItemById([...folders], item, toFolderId);
    if (removed) {
      const newFolders = pasteToFolder([...newData], item, toFolderId);
      setFolders([...newFolders]);
    }
  };

  return (
    <div className="file-structure">
      {folders.map((folder) => (
        <Folder
          key={folder.name}
          folder={folder}
          folders={folders}
          onDropItem={handleDropItem}
        />
      ))}
    </div>
  );
};

export default FileStructure;
