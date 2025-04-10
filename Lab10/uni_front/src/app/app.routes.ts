import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { UnivercityComponent } from './Components/univercity/univercity.component';
import { InternshipComponent } from './Components/internship/internship.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent },
    {path:'univercities',component:UnivercityComponent},
    {path:'internship',component:InternshipComponent}
];
