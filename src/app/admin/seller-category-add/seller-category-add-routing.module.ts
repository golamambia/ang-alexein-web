import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerCategoryAddPage } from './seller-category-add.page';

const routes: Routes = [
  {
    path: '',
    component: SellerCategoryAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerCategoryAddPageRoutingModule {}
