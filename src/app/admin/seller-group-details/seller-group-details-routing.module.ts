import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerGroupDetailsPage } from './seller-group-details.page';

const routes: Routes = [
  {
    path: '',
    component: SellerGroupDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerGroupDetailsPageRoutingModule {}
