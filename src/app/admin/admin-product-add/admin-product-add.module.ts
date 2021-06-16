import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminProductAddPageRoutingModule } from './admin-product-add-routing.module';
import { AdminProductAddPage } from './admin-product-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminProductAddPageRoutingModule
  ],
  declarations: [AdminProductAddPage]
})
export class AdminProductAddPageModule {}
