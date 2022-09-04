import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Collection } from '../interfaces/collection';

const baseUrl = 'https://collection-orange-notes.herokuapp.com/collections';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private http: HttpClient) { }

  getCollections(){
    return this.http.get<Collection[]>(baseUrl);
  }

  getCollectionById(id: number) {
    return this.http.get<Collection>(`${baseUrl}/${id}`);
  }

  getCollectionContent(id: number) {
    return this.http.get<Collection[]>(`${baseUrl}/content/${id}`);
  }

  createCollection(collection: Collection) {
    return this.http.post<Collection>(baseUrl, collection);
  }

  updateCollection(id: number,collection: Collection) {
    return this.http.put<Collection>(`${baseUrl}/${id}`,collection);
  }

  finishCollection(id: number) {
    return this.http.patch<Collection>(`${baseUrl}/${id}`,null);
  }

  addContentToCollection(id: number,content: Collection) {
    console.log(content);
    console.log(id)
    return this.http.post<Collection>(`${baseUrl}/add/${id}`, content);
  }

  deleteCollection(id: number) {
    return this.http.delete<boolean>(`${baseUrl}/${id}`);
  }

}
