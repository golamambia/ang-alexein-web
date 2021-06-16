import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { OwlModule } from 'ngx-owl-carousel';
import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WINDOW_PROVIDERS } from "./services/window.service";
import { IncludeModule } from './include/include.module';
import { UserDefaultLayoutComponent, SellerDefaultLayoutComponent, AdminDefaultLayoutComponent } from './containers';
import { IonicStorageModule } from '@ionic/storage-angular';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { AngularEditorModule } from '@kolkov/angular-editor';

const APP_CONTAINERS = [
  UserDefaultLayoutComponent,
  SellerDefaultLayoutComponent,
  AdminDefaultLayoutComponent
];

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
    ngModule: Type<T>;
    providers?: Provider[];
  }
}

@NgModule({
  declarations: [AppComponent,
    ...APP_CONTAINERS],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    NgbDatepickerModule,
    OwlModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IncludeModule,
    IonicStorageModule.forRoot(),
    
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, WINDOW_PROVIDERS],
  bootstrap: [AppComponent],
})
export class AppModule { }
