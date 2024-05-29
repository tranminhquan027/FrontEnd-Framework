import { Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductListComponent } from './pages/admin/products/list/list.component';
import { ProductDetailComponent } from './pages/products/detail/detail.component';
export const routes: Routes = [
    {
        path: 'admin',
        component: AdminLayoutComponent,
        children: [
            {
                path: 'product/list',
                component: ProductListComponent,
            },
            {
                path: 'product/:id',
                component: ProductDetailComponent,
            },
        ],
    },
]; 