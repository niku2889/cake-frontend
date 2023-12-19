import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderSuccessComponent } from './order-success/order-success.component';
import { OrderFailedComponent } from './order-failed/order-failed.component';
import { OrdersComponent } from './orders/orders.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from 'src/services/auth.guard';

const routes: Routes = [
  { path: '', component: ProductDetailsComponent },
  { path: 'success/:orderNo', component: OrderSuccessComponent },
  { path: 'failed/:orderNo', component: OrderFailedComponent },
  { path: 'orders', component: OrdersComponent, canActivate: [AuthGuard], },
  { path: 'login', component: LoginComponent, canActivate: [AuthGuard], },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
