import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserRegistrationPageRoutingModule } from './user-registration-routing.module';
import { UserRegistrationPage } from './user-registration.page';
import { IncludeModule } from 'src/app/include/include.module';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UserRegistrationPageRoutingModule,
    IncludeModule,
    NgbDatepickerModule
  ],
  declarations: [UserRegistrationPage]
})
export class UserRegistrationPageModule {}
