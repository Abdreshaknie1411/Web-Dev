import { Component, inject, OnInit } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Album } from '../album';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-albums',
  imports: [RouterLink, CommonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.css'
})

export class AlbumComponent implements OnInit{
  albumsList: Album[] = [];
  albumsService: AlbumsService = inject(AlbumsService);

  ngOnInit(): void {
    this.albumsService.getAllAlbums().subscribe(data => {
      this.albumsList = data;
      console.log(this.albumsList); 
    });
  }
 
  constructor() {  }

  deleteAlbum(id: number): void {
    this.albumsService.deleteAlbumById(id).subscribe(() => {
      this.albumsList = this.albumsList.filter(album => album.id !== id);
      console.log(this.albumsList);
    }); 
  }
}