import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerSubcategoryUpdatePage } from './seller-subcategory-update.page';

const routes: Routes = [
  {
    path: '',
    component: SellerSubcategoryUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerSubcategoryUpdatePageRoutingModule {}
