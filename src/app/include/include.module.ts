import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { AdminHeaderComponent } from './admin/admin-header/admin-header.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminSideNavComponent } from './admin/admin-side-nav/admin-side-nav.component';
import { SellerHeaderComponent } from './seller/seller-header/seller-header.component';
import { SellerFooterComponent } from './seller/seller-footer/seller-footer.component';
import { SellerSideNavComponent } from './seller/seller-side-nav/seller-side-nav.component';
import { UserHeaderComponent } from './user/user-header/user-header.component';
import { UserFooterComponent } from './user/user-footer/user-footer.component';
import { UserSideNavComponent } from './user/user-side-nav/user-side-nav.component';

const PAGES_COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  AdminFooterComponent,
  AdminHeaderComponent,
  AdminSideNavComponent,
  SellerFooterComponent,
  SellerHeaderComponent,
  SellerSideNavComponent,
  UserHeaderComponent,
  UserFooterComponent,
  UserSideNavComponent
];


@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    // IonicModule.forRoot(),
    RouterModule
  ],
  declarations: [
    PAGES_COMPONENTS
  ],
  exports: [
    PAGES_COMPONENTS
  ],
  entryComponents: [],
})
export class IncludeModule { }
