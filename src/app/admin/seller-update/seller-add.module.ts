import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SellerAddPageRoutingModule } from './seller-add-routing.module';
import { SellerAddPage } from './seller-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SellerAddPageRoutingModule
  ],
  exports:[
    SellerAddPage
  ],
  declarations: [SellerAddPage]
})
export class SellerAddPageModule {}
