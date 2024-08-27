import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.getUsers().subscribe((data: any[]) => {
      this.users = data;
    }, error => {
      console.error('Failed to fetch users', error);
    });
  }
}
