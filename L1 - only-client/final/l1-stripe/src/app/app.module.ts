import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SuccessOrderComponent } from './pages/success-order/success-order.component';
import { FailedOrderComponent } from './pages/failed-order/failed-order.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SuccessOrderComponent,
    FailedOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
