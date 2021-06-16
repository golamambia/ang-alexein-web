import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { AdminDefaultLayoutComponent } from '../containers';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Admin'
    },
    component: AdminDefaultLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('../admin/admin-dashboard/admin-dashboard.module').then(m => m.AdminDashboardPageModule)
      },
       {
        path: 'product-add',
        loadChildren: () => import('../admin/admin-product-add/admin-product-add.module').then(m => m.AdminProductAddPageModule)
      },
       {
        path: 'product-update/:id',
        loadChildren: () => import('../admin/admin-product-update/admin-product-update.module').then(m => m.AdminProductUpdatePageModule)
      },
      {
        path: 'product-list',
        loadChildren: () => import('../admin/admin-product-list/admin-product-list.module').then(m => m.AdminProductListPageModule)
      },
      {
        path: 'category-add',
        loadChildren: () => import('../admin/seller-category-add/seller-category-add.module').then(m => m.SellerCategoryAddPageModule)
      },
       {
        path: 'category-update/:id',
        loadChildren: () => import('../admin/seller-category-update/seller-category-update.module').then(m => m.SellerCategoryUpdatePageModule)
      },
      {
        path: 'category-list',
        loadChildren: () => import('../admin/seller-category-list/seller-category-list.module').then(m => m.SellerCategoryListPageModule)
      },
      {
        path: 'sub-category-add',
        loadChildren: () => import('../admin/seller-subcategory-add/seller-subcategory-add.module').then(m => m.SellerSubcategoryAddPageModule)
      },
      {
        path: 'sub-category-update/:id',
        loadChildren: () => import('../admin/seller-subcategory-update/seller-subcategory-update.module').then(m => m.SellerSubcategoryUpdatePageModule)
      },
      {
        path: 'sub-category-list',
        loadChildren: () => import('../admin/seller-subcategory-list/seller-subcategory-list.module').then(m => m.SellerSubcategoryListPageModule)
      },
      {
        path: 'group-add',
        loadChildren: () => import('../admin/seller-group-add/seller-group-add.module').then(m => m.SellerGroupAddPageModule)
      },
      {
        path: 'group-edit/:id',
        loadChildren: () => import('../admin/seller-group-add/seller-group-add.module').then(m => m.SellerGroupAddPageModule)
      },
      {
        path: 'group-list',
        loadChildren: () => import('../admin/seller-group-list/seller-group-list.module').then(m => m.SellerGroupListPageModule)
      },
      {
        path: 'group-details/:id',
        loadChildren: () => import('../admin/seller-group-details/seller-group-details.module').then(m => m.SellerGroupDetailsPageModule)
      },
      {
        path: 'product-add-group',
        loadChildren: () => import('../admin/seller-product-group-add/seller-product-group-add.module').then(m => m.SellerProductGroupAddPageModule)
      },
      {
        path: 'buyer-list',
        loadChildren: () => import('../admin/buyer-list/user-list.module').then(m => m.UserListPageModule)
      },
      {
        path: 'buyer-update12/:id',
        loadChildren: () => import('../admin/buyer-update/seller-add.module').then(m => m.SellerAddPageModule)
      },
       {
        path: 'buyer-update/:id',
        loadChildren: () => import('../admin/buyer-profile/seller-profile.module').then(m => m.SellerProfilePageModule)
      },
       {
        path: 'seller-list',
        loadChildren: () => import('../admin/seller-list/user-list.module').then(m => m.UserListPageModule)
      },
      {
        path: 'seller-update11/:id',
        loadChildren: () => import('../admin/seller-update/seller-add.module').then(m => m.SellerAddPageModule)
      },
      {
        path: 'seller-update/:id',
        loadChildren: () => import('../admin/seller-profile/seller-profile.module').then(m => m.SellerProfilePageModule)
      },
      {
        path: 'faq-add',
        loadChildren: () => import('../admin/faq-add/faq-add.module').then(m => m.FaqAddPageModule)
      },
       {
        path: 'faq-update/:id',
        loadChildren: () => import('../admin/faq-update/faq-add.module').then(m => m.FaqAddPageModule)
      },
      {
        path: 'faq-list',
        loadChildren: () => import('../admin/faq-list/faq-list.module').then(m => m.FaqListPageModule)
      },
       {
        path: 'settings',
        loadChildren: () => import('../admin/settings/settings.module').then(m => m.SettingsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
