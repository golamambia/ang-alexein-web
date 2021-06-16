import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerSubcategoryListPageRoutingModule } from './seller-subcategory-list-routing.module';

import { SellerSubcategoryListPage } from './seller-subcategory-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    SellerSubcategoryListPageRoutingModule
  ],
  declarations: [SellerSubcategoryListPage]
})
export class SellerSubcategoryListPageModule {}
