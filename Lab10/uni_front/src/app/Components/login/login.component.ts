import { Component } from '@angular/core';
import { UniverService } from '../../Service/univer.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string='';
  password: string='';
  errorMessage: string='';

  constructor(private univerService : UniverService, private route:Router){}

  loginUser(){
    this.univerService.login(this.username,this.password).subscribe({
      next:(response) => {
        localStorage.setItem('access_token',response.access);
        localStorage.setItem('refresh_token',response.refresh);
        this.route.navigate(['/univercities'])
        alert("Сәтті кірді")
      },
      error: (error)=>{
        console.log(error)
        this.errorMessage="Қате: логин немесе құпиясөз дұрыс емес"
      }
    });
  }
}
