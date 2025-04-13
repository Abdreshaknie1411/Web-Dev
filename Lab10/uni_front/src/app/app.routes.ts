import { Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { UnivercityComponent } from './Components/univercity/univercity.component';
import { InternshipComponent } from './Components/internship/internship.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';


export const routes: Routes = [
    {path:'',component:HomeComponent},
    {path:'register',component:RegisterComponent},
    {path: 'login', component: LoginComponent },
    {path:'univercities',component:UnivercityComponent},
    {path:'internship',component:InternshipComponent}
];
