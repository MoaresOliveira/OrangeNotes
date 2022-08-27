export interface Collection {
  id: number;
  name: string;
  description: string;
  url?: string;
  type: CollectionType;
  content?: Collection[];
  collection?: Collection;
}

export enum CollectionType {
  LINK = 'Link',
  VIDEO = 'Video',
  IMAGE = 'Image',
  AUDIO = 'Audio',
  COLLECTION = 'Collection',
  CONTENT = 'Content',
}
