import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class CreateProductComponent {
  product = {
    name: '',
    description: '',
    price: 0,
    category: '',
    countInStock: 0,
    image: '',
    brand: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  createProduct() {
    this.authService.createProduct(this.product).subscribe(response => {
      console.log('Product created:', response);
      this.router.navigate(['/products']);
    }, error => {
      console.error('Failed to create product', error);
    });
  }
}
