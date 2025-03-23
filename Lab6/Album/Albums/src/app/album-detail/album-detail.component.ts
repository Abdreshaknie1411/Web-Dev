import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Album } from '../album';
import { AlbumsService } from '../albums.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-album-detail',
  imports: [RouterLink, CommonModule, FormsModule],
  templateUrl: './album-detail.component.html',
  styleUrl: './album-detail.component.css'
})
export class AlbumDetailComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  albumId: number;
  album!: Album;
  albumService: AlbumsService = inject(AlbumsService);
  constructor() {
    this.albumId = Number(this.route.snapshot.params['id']);
    this.albumService.getAlbumById(this.albumId).subscribe(data => this.album = data);
  }
  updateTitle() {
    alert(`New Title: ${this.album.title}`);
    this.albumService.updateAlbum(this.album).subscribe(data=>{this.album = data; console.log(this.album.title)});
  }
}