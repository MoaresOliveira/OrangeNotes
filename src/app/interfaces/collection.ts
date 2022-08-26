export interface Collection {
  id: number;
  name: string;
  description: string;
  type: CollectionType;
  content?: Collection[];
  collection?: Collection;
}

export enum CollectionType {
  ARTICLE = 'Article',
  LINK = 'Link',
  VIDEO = 'Video',
  PLAYLIST = 'Playlist',
  IMAGE = 'Image',
  BOOK = 'Book',
  PODCAST = 'Podcast',
  COLLECTION = 'Collection'
}
