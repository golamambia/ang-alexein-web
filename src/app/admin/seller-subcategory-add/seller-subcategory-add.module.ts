import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerSubcategoryAddPageRoutingModule } from './seller-subcategory-add-routing.module';

import { SellerSubcategoryAddPage } from './seller-subcategory-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SellerSubcategoryAddPageRoutingModule
  ],
  declarations: [SellerSubcategoryAddPage]
})
export class SellerSubcategoryAddPageModule {}
