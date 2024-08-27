import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class LoginComponent {

  email = '';
  password = '';

  constructor(private router: Router, private authService: AuthService) {}

  login() {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe(response => {
      console.log('Login successful:', response);
      
      localStorage.setItem('authToken', response.token);
      
      
      this.router.navigate(['/products']);
    }, error => {
      console.error('Login failed', error);
    });
  }  
  

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
