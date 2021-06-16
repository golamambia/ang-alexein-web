import { NgModule } from '@angular/core';
import { IncludeModule } from 'src/app/include/include.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { NotFoundPageRoutingModule } from './not-found-routing.module';
import { NotFoundPage } from './not-found.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NotFoundPageRoutingModule,
    IncludeModule
  ],
  declarations: [NotFoundPage]
})
export class NotFoundPageModule {}
