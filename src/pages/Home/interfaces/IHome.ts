export interface IFile {
  id: number;
  name: string;
}

export interface IFolder {
  id: number;
  name: string;
  folders?: IFolder[];
  files?: IFile[];
}

interface IItemFolder {
  type: string
  folder: IFolder;
  parentFolder?: IFolder;
}

interface IItemFile {
  type: string
  parentFolder?: IFolder;
  name: string;
  id: number;
}

export interface IItem extends IItemFolder, IItemFile {}

export interface IFileProps {
  file: IFile,
  parentFolder: IFolder
}

export interface IFolderProps {
  folder: IFolder,
  onDropItem: IHandleDropItem,
  parentFolder?: IFolder,
  folders: IFolder[]
}

export interface IHomeProps {
  initialData: IFolder[]
}

export interface IHandleDropItem {
  (item: IItem, toFolderId: number): void;
}

export interface IFindAndRemoveItemById {
  (data: IFolder[], movedItem: IItem, toFolderId: number): { removed : boolean, newData: IFolder[] };
}

export interface IPasteToFolder {
  (data: IFolder[], movedItem: IItem, toFolderId: number): IFolder[];
}
