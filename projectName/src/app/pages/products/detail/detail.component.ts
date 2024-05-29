// import { Component } from '@angular/core';
// @Component({
//   selector: 'app-detail',
//   standalone: true,
//   imports: [],
//   templateUrl: './detail.component.html',
//   styleUrl: './detail.component.css'
// })
// export class DetailComponent {
// }

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';
import { NgIf } from '@angular/common';
import { Product } from '../../../../type/product';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css',
})
export class ProductDetailComponent {
  route = inject(ActivatedRoute);
  productService = inject(ProductService);
  product!: Product | undefined;

  ngOnInit() {
    this.route.params.subscribe((param) => {
      this.productService.getProductDetail(param['id']).subscribe({
        next: (data) => {
          this.product = data;
        },
        error: (error) => {
          console.error(error);
        },
      });
    });
  }
}

