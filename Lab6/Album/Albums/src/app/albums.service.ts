import { Injectable } from '@angular/core';
import { Album } from './album';
import { Photo } from './photo';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlbumsService {
  
  constructor(private httpClient: HttpClient) { }

  getAllAlbums(): Observable<Album[]> {
    return this.httpClient.get<Album[]>('https://jsonplaceholder.typicode.com/albums');
  }
  getAlbumById(id: number): Observable<Album> {
    return this.httpClient.get<Album>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  getPhotosByAlbumId(id: number): Observable<Photo[]> {
    return this.httpClient.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos`);
  }
  updateAlbum(album: Album): Observable<Album> {
    return this.httpClient.put<Album>(`https://jsonplaceholder.typicode.com/albums/${album.id}`, album);
  }
  deleteAlbumById(id: number): Observable<void> {
    return this.httpClient.delete<void>(`https://jsonplaceholder.typicode.com/albums/${id}`);
  }
  
}