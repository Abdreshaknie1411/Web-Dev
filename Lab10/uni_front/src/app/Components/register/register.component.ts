
import { Component} from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UniverService } from '../../Service/univer.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule,RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  username : string = '';
  password: string='';
  email: string='';
  errorMessage : string='';

  constructor(private univerService:UniverService,private router:Router){}

  register(){
    this.univerService.registerUser(this.username,this.password).subscribe({
      next: response =>{
        console.log("Registration success", response)
        this.router.navigate(['univercities/'])
      },
      error: error => {
        console.log("Error",error)
        this.errorMessage = 'Тіркелу сәтсіз болды. Қайта көріңіз.';
      }
    })
  }
}
