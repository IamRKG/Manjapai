import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent } from './order-list/order-list.component';
import { OrderDetailsComponent } from './order-list/order-details/order-details.component';
import {AccountInfoResolverGuard} from '../common/account-info-resolver/account-info-resolver.guard';

const routes: Routes = [{
  path: '',
  component: OrderListComponent,
  resolve: {
    orderListResolveData: AccountInfoResolverGuard
  }
}, {
  path: '',
  component: OrderDetailsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
