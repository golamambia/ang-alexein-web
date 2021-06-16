import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerGroupListPage } from './seller-group-list.page';

const routes: Routes = [
  {
    path: '',
    component: SellerGroupListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerGroupListPageRoutingModule {}
