import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SellerProductUpdatePageRoutingModule } from './seller-product-update-routing.module';
import { SellerProductUpdatePage } from './seller-product-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SellerProductUpdatePageRoutingModule
  ],
  declarations: [SellerProductUpdatePage]
})
export class SellerProductUpdatePageModule {}
