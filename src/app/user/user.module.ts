import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BaseRoutingModule } from './user-routing.module';
import { IncludeModule } from '../include/include.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    BaseRoutingModule,
    IncludeModule
  ],
})
export class UserModule { }
