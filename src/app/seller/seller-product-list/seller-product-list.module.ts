import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerProductListPageRoutingModule } from './seller-product-list-routing.module';

import { SellerProductListPage } from './seller-product-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerProductListPageRoutingModule
  ],
  declarations: [SellerProductListPage]
})
export class SellerProductListPageModule {}
