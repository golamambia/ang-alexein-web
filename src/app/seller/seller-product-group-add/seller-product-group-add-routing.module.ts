import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerProductGroupAddPage } from './seller-product-group-add.page';

const routes: Routes = [
  {
    path: '',
    component: SellerProductGroupAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerProductGroupAddPageRoutingModule {}
