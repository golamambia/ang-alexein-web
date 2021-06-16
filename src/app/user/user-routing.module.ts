import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserDefaultLayoutComponent } from '../containers';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'User'
    },
    component: UserDefaultLayoutComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./user-dashboard/user-dashboard.module').then( m => m.UserDashboardPageModule),
      },
       {
        path: 'profile',
        loadChildren: () => import('./user-profile/user-profile.module').then(m => m.UserProfilePageModule)
      },
      {
        path: 'bid-report',
        loadChildren: () => import('./user-bid-report/user-bid-report.module').then(m => m.UserBidReportPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule { }
