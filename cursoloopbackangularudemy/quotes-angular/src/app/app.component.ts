import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  isLoggedIn;

  constructor(private router: Router,private authService: AuthService) {

  }

  routeChanged() {
    console.log("working");
    this.isLoggedIn = this.authService.isLoggedIn();
  }

  onLogout() {
    this.authService.logout().subscribe(data => {
      localStorage.removeItem('quotesAngularToken');
      this.router.navigateByUrl('/login');
    })
  }
}
