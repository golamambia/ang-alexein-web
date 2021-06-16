import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerGroupListPageRoutingModule } from './seller-group-list-routing.module';

import { SellerGroupListPage } from './seller-group-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerGroupListPageRoutingModule
  ],
  declarations: [SellerGroupListPage]
})
export class SellerGroupListPageModule {}
