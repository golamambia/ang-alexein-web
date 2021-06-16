import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SellerLoginPage } from './seller-login.page';

const routes: Routes = [
  {
    path: '',
    component: SellerLoginPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerLoginPageRoutingModule {}
