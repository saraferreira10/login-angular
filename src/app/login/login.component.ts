import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../service/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  showPass: boolean = false;
  username: string = '';
  password: string = '';
  authService: AuthService = inject(AuthService);

  constructor(private router: Router) {}

  login() {
    this.authService.confirmUser(this.username, this.password);

    if (this.authService.isLogged()) {
      this.router.navigate(['home']);
    } else {
      this.username = '';
      this.password = '';
    }
  }
}
