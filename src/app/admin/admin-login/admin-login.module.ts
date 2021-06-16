import { NgModule } from '@angular/core';
import { IncludeModule } from 'src/app/include/include.module';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AdminLoginPageRoutingModule } from './admin-login-routing.module';
import { AdminLoginPage } from './admin-login.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AdminLoginPageRoutingModule,
    IncludeModule
  ],
  declarations: [AdminLoginPage]
})
export class AdminLoginPageModule {}
