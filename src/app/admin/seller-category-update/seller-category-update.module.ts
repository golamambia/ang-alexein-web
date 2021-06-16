import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SellerCategoryUpdatePageRoutingModule } from './seller-category-update-routing.module';
import { SellerCategoryUpdatePage } from './seller-category-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SellerCategoryUpdatePageRoutingModule
  ],
  exports:[
    SellerCategoryUpdatePage
  ],
  declarations: [SellerCategoryUpdatePage]
})
export class SellerCategoryUpdatePageModule {}
