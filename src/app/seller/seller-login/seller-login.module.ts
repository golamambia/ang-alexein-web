import { NgModule } from '@angular/core';
import { IncludeModule } from 'src/app/include/include.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SellerLoginPageRoutingModule } from './seller-login-routing.module';
import { SellerLoginPage } from './seller-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SellerLoginPageRoutingModule,
    IncludeModule
  ],
  declarations: [SellerLoginPage]
})
export class SellerLoginPageModule {}
