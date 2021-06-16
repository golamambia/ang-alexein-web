import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminProductUpdatePage } from './admin-product-update.page';

const routes: Routes = [
  {
    path: '',
    component: AdminProductUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminProductUpdatePageRoutingModule {}
