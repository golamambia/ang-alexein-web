import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LiveAuctionsPageRoutingModule } from './live-auctions-routing.module';
import { LiveAuctionsPage } from './live-auctions.page';
import { IncludeModule } from '../../include/include.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LiveAuctionsPageRoutingModule,
    IncludeModule
  ],
  declarations: [LiveAuctionsPage]
})
export class LiveAuctionsPageModule {}
