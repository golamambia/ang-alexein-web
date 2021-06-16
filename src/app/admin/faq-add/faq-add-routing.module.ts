import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FaqAddPage } from './faq-add.page';

const routes: Routes = [
  {
    path: '',
    component: FaqAddPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FaqAddPageRoutingModule {}
