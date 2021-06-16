import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SellerProductAddPageRoutingModule } from './seller-product-add-routing.module';
import { SellerProductAddPage } from './seller-product-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SellerProductAddPageRoutingModule
  ],
  declarations: [SellerProductAddPage]
})
export class SellerProductAddPageModule {}
