import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { UserDashboardPageRoutingModule } from './user-dashboard-routing.module';
import { UserDashboardPage } from './user-dashboard.page';
import { IncludeModule } from 'src/app/include/include.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserDashboardPageRoutingModule,
    IncludeModule
  ],
  declarations: [UserDashboardPage]
})
export class UserDashboardPageModule {}
