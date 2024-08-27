import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.getProducts().subscribe(data => {
      this.products = data;
    }, error => {
      console.error('Failed to fetch products', error);
    });
  }

  navigateToCreateProduct() {
    this.router.navigate(['/create-product']);
  }
}
