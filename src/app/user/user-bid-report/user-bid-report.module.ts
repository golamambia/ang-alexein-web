import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserBidReportPageRoutingModule } from './user-bid-report-routing.module';

import { UserBidReportPage } from './user-bid-report.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserBidReportPageRoutingModule
  ],
  declarations: [UserBidReportPage]
})
export class UserBidReportPageModule {}
