import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserBidReportPage } from './user-bid-report.page';

const routes: Routes = [
  {
    path: '',
    component: UserBidReportPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserBidReportPageRoutingModule {}
