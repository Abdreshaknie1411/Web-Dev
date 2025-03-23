import { Component, inject } from '@angular/core';
import { AlbumsService } from '../albums.service';
import { Photo } from '../photo';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-album-photos',
  imports: [RouterLink, CommonModule],
  templateUrl: './photos.component.html',
  styleUrl: './photos.component.css'
})
export class PhotosComponent {
  albumsService: AlbumsService = inject(AlbumsService);
  photoList: Photo[] = [];
  route: ActivatedRoute = inject(ActivatedRoute);
  constructor() {
  }
  ngOnInit(): void {
    const albumId = Number(this.route.snapshot.paramMap.get('id'));
    this.albumsService.getPhotosByAlbumId(albumId).subscribe(data => this.photoList = data );
  }
 
}