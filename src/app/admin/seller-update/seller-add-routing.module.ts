import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SellerAddPage } from './seller-add.page';

const routes: Routes = [
  {
    path: '',
    component: SellerAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerAddPageRoutingModule {}
