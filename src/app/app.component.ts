import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isAuthed$!: Observable<boolean>;
  menuOpen = false;

  constructor(private auth: AuthService, private router: Router) {
    this.isAuthed$ = this.auth.isAuthenticated$;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  goCreateProduct() {
    this.closeMenu();
    this.router.navigate(['/create-product']);
  }

  goUsers() {
    this.router.navigate(['/users']);
    this.closeMenu();
  }

  logout() {
    this.closeMenu();
    this.auth.logout();
    this.router.navigate(['/login']);
  }
}
