import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerProductAddPage } from './seller-product-add.page';

const routes: Routes = [
  {
    path: '',
    component: SellerProductAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerProductAddPageRoutingModule {}
