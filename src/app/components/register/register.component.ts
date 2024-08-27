import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [FormsModule]
})
export class RegisterComponent {

  name = '';
  email = '';
  password = '';

  constructor(private authService: AuthService) {}

  register() {
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: '1234567890',
      isAdmin: false
    };
    this.authService.register(newUser).subscribe(response => {
      console.log('User registered successfully:', response);
    }, error => {
      console.error('Registration failed', error);
    });
  }
}
