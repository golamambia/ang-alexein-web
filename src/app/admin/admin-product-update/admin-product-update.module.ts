import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminProductUpdatePageRoutingModule } from './admin-product-update-routing.module';
import { AdminProductUpdatePage } from './admin-product-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminProductUpdatePageRoutingModule
  ],
  declarations: [AdminProductUpdatePage]
})
export class AdminProductUpdatePageModule {}
