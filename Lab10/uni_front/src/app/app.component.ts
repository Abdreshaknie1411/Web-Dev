import { Component, OnInit } from '@angular/core';
import { RouterOutlet,RouterLink, RouterModule} from '@angular/router';
import { LoginComponent } from "./Components/login/login.component";
import { Router } from '@angular/router';
import { HomeComponent } from "./Components/home/home.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'uni_front';

  constructor(private router: Router) { }

  ngOnInit(): void {
    const lastVisitedRoute = localStorage.getItem('lastVisitedRoute');
    if (lastVisitedRoute) {
      this.router.navigate([lastVisitedRoute]);
    }
  }

  // Дұрыс маршрутқа өту үшін, URL-ді localStorage-те сақтау
  updateLastVisitedRoute(): void {
    localStorage.setItem('lastVisitedRoute', this.router.url);
  }
}
