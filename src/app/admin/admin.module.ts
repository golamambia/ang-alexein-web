import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { IncludeModule } from '../include/include.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule,
    IncludeModule,
  ],
})
export class AdminModule { }
