import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FaqAddPageRoutingModule } from './faq-add-routing.module';
import { FaqAddPage } from './faq-add.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FaqAddPageRoutingModule
  ],
  exports:[
    FaqAddPage
  ],
  declarations: [FaqAddPage]
})
export class FaqAddPageModule {}
