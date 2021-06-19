import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './pages/home/home.module';
import { UserDefaultLayoutComponent, SellerDefaultLayoutComponent,AdminDefaultLayoutComponent } from './containers';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./user/user-login/user-login.module').then(m => m.UserLoginPageModule)
  },
  {
    path: 'registration',
    loadChildren: () => import('./user/user-registration/user-registration.module').then(m => m.UserRegistrationPageModule)
  },
  {
    path: 'seller-login',
    loadChildren: () => import('./seller/seller-login/seller-login.module').then(m => m.SellerLoginPageModule)
  },
  {
    path: 'seller-registration',
    loadChildren: () => import('./seller/seller-registration/seller-registration.module').then(m => m.SellerRegistrationPageModule)
  },
  {
    path: 'live-auctions',
    loadChildren: () => import('./pages/live-auctions/live-auctions.module').then(m => m.LiveAuctionsPageModule)
  },
  {
    path: 'product-details/:id/:gid',
    loadChildren: () => import('./product-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'auction-details/:id',
    loadChildren: () => import('./group-details/product-details.module').then(m => m.ProductDetailsPageModule)
  },
  {
    path: 'auctionItems/:id',
    loadChildren: () => import('./group-items/group-items.module').then(m => m.GroupItemsPageModule)
  },
   
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then(m => m.FaqPageModule)
  },
  {
    path: 'contact-us',
    loadChildren: () => import('./pages/contact-us/contact-us.module').then(m => m.ContactUsPageModule)
  },
  {
    path : 'seller',
    loadChildren : () => import('./seller/seller.module').then(m => m.SellerModule),
  },
  {
    path : 'user',
    loadChildren : () => import('./user/user.module').then(m => m.UserModule),
  },
   {
    path : 'admin',
    loadChildren : () => import('./admin/admin.module').then(m => m.AdminModule),
  },
   {
    path: 'admin-login',
    loadChildren: () => import('./admin/admin-login/admin-login.module').then(m => m.AdminLoginPageModule)
  },
  {
    path: 'not-found',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },
  { path: '**', redirectTo: 'not-found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
