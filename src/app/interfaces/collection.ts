export interface Collection {
  id: number;
  name: string;
  description?: string;
  url?: string;
  type?: CollectionType;
  content?: Collection[];
  parent?: Collection;
  percentage?: number;
  finished?: boolean;
}

export enum CollectionType {
  LINK = 'LINK',
  VIDEO = 'VIDEO',
  IMAGE = 'IMAGE',
  AUDIO = 'AUDIO',
  COLLECTION = 'COLLECTION',
  CONTENT = 'CONTENT',
}
