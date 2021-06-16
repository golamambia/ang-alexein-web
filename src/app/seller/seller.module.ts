import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { SellerRoutingModule } from './seller-routing.module';
import { IncludeModule } from '../include/include.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SellerRoutingModule,
    IncludeModule,
  ],
})
export class SellerModule { }
