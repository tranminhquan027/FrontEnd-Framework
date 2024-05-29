import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Product } from '../../type/product';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  apiUrl = 'http://localhost:3000/products';
  http = inject(HttpClient);

  getAllProducts(): Observable<Product[]> {
    if (!this.apiIsReady()) { // Hàm kiểm tra API có sẵn sàng hay không
      return this.mockProducts();
    }
    return this.http.get<Product[]>(this.apiUrl);
  }

  private apiIsReady(): boolean {
    // Logic để kiểm tra API có sẵn sàng hay không
    return false;
  }


  deleteProduct(id: string) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  getProductDetail(id: string) {
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }

  private mockProducts(): Observable<Product[]> {
    const mockProducts: Product[] = [
      {
        id: 1,
        title: 'Product 1',
        price: 100,
        description: 'Description 1',
        category: 'Category 1',
        image: 'https://illustoon.com/photo/7311.png',
        rating: {
          rate: 4.5,
          count: 10
        }
      },
      {
        id: 2,
        title: 'Product 2',
        price: 200,
        description: 'Description 2',
        category: 'Category 2',
        image: 'https://illustoon.com/photo/7251.png',
        rating: {
          rate: 4.0,
          count: 20
        }
      }
    ];

    return of(mockProducts);
  }

}

