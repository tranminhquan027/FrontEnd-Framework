import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Product } from '../../../../../type/product';
import { ProductService } from '../../../../services/product.service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ProductListComponent {
  products!: Product[];
  filteredProducts!: Product[];
  searchQuery: string = '';

  constructor(
    private productService: ProductService,
    // private toastrService: ToastrService
  ) { }

ngOnInit(): void {
  this.getAllData();
}

getAllData(): void {
  this.productService.getAllProducts().subscribe({
    next: (res) => {
      this.products = res;
      this.filteredProducts = res;
    },
  });
} onSearch(): void {
  // if (this.searchQuery.trim()) {
  //   this.productService.searchProducts(this.searchQuery).subscribe({
  //     next: (res) => {
  //       this.filteredProducts = res;
  //     },
  //     error: (err) => {
  //       this.toastrService.error('Failed to search products');
  //       console.error('Error searching products', err);
  //     }
  //   });
  // } else {
  //   this.filteredProducts = this.products;
  // }
}
trackByIndex(index: number, item: Product): any {
  return item.id;
}

  deleteData(id: string): void {
    // if (confirm('Are you sure you want to delete this item?')) {
    //   this.productService.deleteProduct(id).subscribe({
    //     next: (res) => {
    //       this.toastrService.success('Product deleted successfully');
    //       this.getAllData();
    //     },
    //     error: (err) => {
    //       this.toastrService.error('Failed to delete the product');
    //       console.error('Error deleting product', err);
    //     }
    //   });
    // }
  }
}
// handleDeleteProduct(id: number) { }
// }
