import { NgModule } from '@angular/core';
import { OwlModule } from 'ngx-owl-carousel';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GroupItemsPageRoutingModule } from './group-items-routing.module';
import { GroupItemsPage } from './group-items.page';
import { IncludeModule } from '../include/include.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GroupItemsPageRoutingModule,
    IncludeModule,
    OwlModule
  ],
  declarations: [GroupItemsPage]
})
export class GroupItemsPageModule {}
