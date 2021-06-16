import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { SellerDefaultLayoutComponent } from '../containers';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Seller'
    },
    component: SellerDefaultLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../seller/seller-dashboard/seller-dashboard.module').then(m => m.SellerDashboardPageModule)
      },
       {
        path: 'profile',
        loadChildren: () => import('../seller/seller-profile/seller-profile.module').then(m => m.SellerProfilePageModule)
      },
      {
        path: 'product-add',
        loadChildren: () => import('../seller/seller-product-add/seller-product-add.module').then(m => m.SellerProductAddPageModule)
      },
      {
        path: 'product-update/:id',
        loadChildren: () => import('../seller/seller-product-update/seller-product-update.module').then(m => m.SellerProductUpdatePageModule)
      },
      {
        path: 'product-list',
        loadChildren: () => import('../seller/seller-product-list/seller-product-list.module').then(m => m.SellerProductListPageModule)
      },
      {
        path: 'category-add',
        loadChildren: () => import('../seller/seller-category-add/seller-category-add.module').then(m => m.SellerCategoryAddPageModule)
      },
       {
        path: 'category-update/:id',
        loadChildren: () => import('../seller/seller-category-update/seller-category-update.module').then(m => m.SellerCategoryUpdatePageModule)
      },
      {
        path: 'category-list',
        loadChildren: () => import('../seller/seller-category-list/seller-category-list.module').then(m => m.SellerCategoryListPageModule)
      },
      {
        path: 'sub-category-add',
        loadChildren: () => import('../seller/seller-subcategory-add/seller-subcategory-add.module').then(m => m.SellerSubcategoryAddPageModule)
      },
      {
        path: 'sub-category-update/:id',
        loadChildren: () => import('../seller/seller-subcategory-update/seller-subcategory-update.module').then(m => m.SellerSubcategoryUpdatePageModule)
      },
      {
        path: 'sub-category-list',
        loadChildren: () => import('../seller/seller-subcategory-list/seller-subcategory-list.module').then(m => m.SellerSubcategoryListPageModule)
      },
      {
        path: 'group-add',
        loadChildren: () => import('../seller/seller-group-add/seller-group-add.module').then(m => m.SellerGroupAddPageModule)
      },
      {
        path: 'group-edit/:id',
        loadChildren: () => import('../seller/seller-group-add/seller-group-add.module').then(m => m.SellerGroupAddPageModule)
      },
      {
        path: 'group-list',
        loadChildren: () => import('../seller/seller-group-list/seller-group-list.module').then(m => m.SellerGroupListPageModule)
      },
      {
        path: 'group-details/:id',
        loadChildren: () => import('../seller/seller-group-details/seller-group-details.module').then(m => m.SellerGroupDetailsPageModule)
      },
      {
        path: 'product-add-group',
        loadChildren: () => import('../seller/seller-product-group-add/seller-product-group-add.module').then(m => m.SellerProductGroupAddPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SellerRoutingModule {}
