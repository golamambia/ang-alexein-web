import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SellerRegistrationPageRoutingModule } from './seller-registration-routing.module';
import { SellerRegistrationPage } from './seller-registration.page';
import { IncludeModule } from 'src/app/include/include.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SellerRegistrationPageRoutingModule,
    IncludeModule,
    NgbDatepickerModule
  ],
  declarations: [SellerRegistrationPage]
})
export class SellerRegistrationPageModule {}
