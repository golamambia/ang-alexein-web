import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SellerCategoryListPageRoutingModule } from './seller-category-list-routing.module';
import { SellerCategoryListPage } from './seller-category-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerCategoryListPageRoutingModule
  ],
  declarations: [SellerCategoryListPage]
})
export class SellerCategoryListPageModule {}
