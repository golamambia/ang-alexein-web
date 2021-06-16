import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SellerCategoryAddPageRoutingModule } from './seller-category-add-routing.module';
import { SellerCategoryAddPage } from './seller-category-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SellerCategoryAddPageRoutingModule
  ],
  exports:[
    SellerCategoryAddPage
  ],
  declarations: [SellerCategoryAddPage]
})
export class SellerCategoryAddPageModule {}
