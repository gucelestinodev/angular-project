import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {

  email = '';
  password = '';

  loginError = false;

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    const credentials = { email: this.email, password: this.password };

    this.authService.login(credentials).subscribe({
      next: (response) => {
        console.log('Login successful:', response);

        localStorage.setItem('authToken', response.token);

        this.loginError = false;
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error('Login failed', err);
        this.loginError = true;
      }
    });
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
