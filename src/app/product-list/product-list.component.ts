import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';  // Import ProductService
import { CommonModule} from '@angular/common';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
  imports:[CommonModule]
})
export class ProductListComponent implements OnInit {

  products: any[] = [];  // Array to store products
  isLoading = true;  // Flag to show loading state

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    // Fetch products when the component is initialized
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data; 
        console.log(data); // Store the fetched data
        this.isLoading = false;  // Hide loading spinner once data is fetched
      },
      error: (err) => {
        console.error('Error fetching products', err);
        this.isLoading = false;  // Hide loading spinner even in case of error
      }
    });
  }
}
