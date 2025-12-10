import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  imports: [FormsModule]
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  register() {
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: '1234567890',
      isAdmin: false
    };

    this.authService.register(newUser).subscribe({
      next: () => {
        console.log('User registered successfully');
        this.router.navigate(['/login']);
      },
      error: (err) => console.error('Registration failed', err)
    });
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
