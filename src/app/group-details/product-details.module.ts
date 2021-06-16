import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProductDetailsPageRoutingModule } from './product-details-routing.module';
import { ProductDetailsPage } from './product-details.page';
import { IncludeModule } from '../include/include.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductDetailsPageRoutingModule,
    IncludeModule,
    OwlModule
  ],
  declarations: [ProductDetailsPage]
})
export class ProductDetailsPageModule {}
