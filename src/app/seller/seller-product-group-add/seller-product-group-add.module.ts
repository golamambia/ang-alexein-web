import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerProductGroupAddPageRoutingModule } from './seller-product-group-add-routing.module';

import { SellerProductGroupAddPage } from './seller-product-group-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerProductGroupAddPageRoutingModule
  ],
  declarations: [SellerProductGroupAddPage]
})
export class SellerProductGroupAddPageModule {}
