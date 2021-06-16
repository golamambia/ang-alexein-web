import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerSubcategoryListPage } from './seller-subcategory-list.page';

const routes: Routes = [
  {
    path: '',
    component: SellerSubcategoryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerSubcategoryListPageRoutingModule {}
