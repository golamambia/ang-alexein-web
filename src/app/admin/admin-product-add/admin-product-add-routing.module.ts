import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminProductAddPage } from './admin-product-add.page';

const routes: Routes = [
  {
    path: '',
    component: AdminProductAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminProductAddPageRoutingModule {}
