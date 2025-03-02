import { Routes } from '@angular/router';
import { AboutComponent } from '../app/Components/about/about.component';
import { AlbumComponent } from './Components/album/album.component';
import { AlbumDetailComponent } from './Components/album-detail/album-detail.component';
import { PhotosComponent } from './Components/photos/photos.component';
import { AppComponent } from './app.component';  

export const routes: Routes = [
    { path: 'about', component: AboutComponent },
    { path: 'albums', component: AlbumComponent },
    { path: 'albums/:id', component: AlbumDetailComponent },
    { path: 'albums/:id/photos', component: PhotosComponent },
    { path: '**', redirectTo: '' } 
];