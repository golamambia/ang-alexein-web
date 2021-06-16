import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GroupItemsPage } from './group-items.page';

const routes: Routes = [
  {
    path: '',
    component: GroupItemsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupItemsPageRoutingModule {}
