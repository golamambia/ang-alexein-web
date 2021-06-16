import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerCategoryListPage } from './seller-category-list.page';

const routes: Routes = [
  {
    path: '',
    component: SellerCategoryListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerCategoryListPageRoutingModule {}
