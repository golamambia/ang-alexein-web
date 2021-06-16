import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerCategoryUpdatePage } from './seller-category-update.page';

const routes: Routes = [
  {
    path: '',
    component: SellerCategoryUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerCategoryUpdatePageRoutingModule {}
