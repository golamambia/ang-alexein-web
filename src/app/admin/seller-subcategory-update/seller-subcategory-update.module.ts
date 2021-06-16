import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerSubcategoryUpdatePageRoutingModule } from './seller-subcategory-update-routing.module';

import { SellerSubcategoryUpdatePage } from './seller-subcategory-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SellerSubcategoryUpdatePageRoutingModule
  ],
  declarations: [SellerSubcategoryUpdatePage]
})
export class SellerSubcategoryUpdatePageModule {}
