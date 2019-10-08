import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { SuccessOrderComponent } from './pages/success-order/success-order.component';
import { FailedOrderComponent } from './pages/failed-order/failed-order.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'success', component: SuccessOrderComponent },
  { path: 'failed', component: FailedOrderComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
