import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LiveAuctionsPage } from './live-auctions.page';

const routes: Routes = [
  {
    path: '',
    component: LiveAuctionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LiveAuctionsPageRoutingModule {}
