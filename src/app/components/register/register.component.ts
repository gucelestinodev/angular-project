import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { AuthService } from '../../services/auth.service';  // Importe o serviço de autenticação

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

  constructor(private authService: AuthService) {}  // Injetar o serviço

  register() {
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
      phone: '1234567890',  // Pode ser configurado conforme necessário
      isAdmin: false
    };
    this.authService.register(newUser).subscribe(response => {
      console.log('User registered successfully:', response);
      // Aqui você pode redirecionar ou dar feedback ao usuário
    }, error => {
      console.error('Registration failed', error);
    });
  }
}
