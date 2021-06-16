import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerGroupAddPageRoutingModule } from './seller-group-add-routing.module';

import { SellerGroupAddPage } from './seller-group-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SellerGroupAddPageRoutingModule
  ],
  exports:[
    SellerGroupAddPage
  ],
  declarations: [SellerGroupAddPage]
})
export class SellerGroupAddPageModule {}
