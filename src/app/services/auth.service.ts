import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { StorageService } from './storage.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private apiUrl = 'http://localhost:3000/api/v1';

  private isAuthedSub = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this.isAuthedSub.asObservable();

  constructor(private http: HttpClient, private storage: StorageService) {
    this.isAuthedSub.next(!!this.storage.getItem('token'));
  }

  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, user);
  }

  login(credentials: { email: string; password: string }): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(`${this.apiUrl}/users/login`, credentials).pipe(
      tap((res) => {
        this.storage.setItem('token', res.token);
        this.isAuthedSub.next(true);
      })
    );
  }

  logout() {
    this.storage.removeItem('token');
    this.isAuthedSub.next(false);
  }

  get token(): string | null {
    return this.storage.getItem('token');
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users`);
  }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/products`);
  }

  createProduct(product: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/products`, product);
  }
}
