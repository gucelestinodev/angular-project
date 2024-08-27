import { FormsModule } from '@angular/forms'; // Importe o FormsModule
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';  // Importe o serviço de autenticação

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

  constructor(private router: Router, private authService: AuthService) {}  // Injetar o serviço

  login() {
    const credentials = { email: this.email, password: this.password };
    this.authService.login(credentials).subscribe(response => {
      console.log('Login successful:', response);
      // Armazene o token se necessário, por exemplo, em localStorage
      localStorage.setItem('authToken', response.token);
      
      // Redireciona para a lista de usuários
      this.router.navigate(['/users']);
    }, error => {
      console.error('Login failed', error);
    });
  }
  

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
