import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SellerGroupDetailsPageRoutingModule } from './seller-group-details-routing.module';

import { SellerGroupDetailsPage } from './seller-group-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SellerGroupDetailsPageRoutingModule
  ],
  declarations: [SellerGroupDetailsPage]
})
export class SellerGroupDetailsPageModule {}
