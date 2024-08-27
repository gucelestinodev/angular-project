import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/api/v1/users';  // URL base da sua API

  constructor(private http: HttpClient) { }

  // Método para registrar um novo usuário
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}`, user);
  }

  // Método para fazer login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // Método para listar usuários (caso precise futuramente)
  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`);
  }
}
