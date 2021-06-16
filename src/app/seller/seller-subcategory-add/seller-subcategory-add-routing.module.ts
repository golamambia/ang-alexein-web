import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerSubcategoryAddPage } from './seller-subcategory-add.page';

const routes: Routes = [
  {
    path: '',
    component: SellerSubcategoryAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerSubcategoryAddPageRoutingModule {}
