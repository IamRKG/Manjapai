import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
    path: 'accountInfo',
    loadChildren: './account/account.module#AccountModule'
}, {
    path: 'orders',
    loadChildren: './orders/orders.module#OrdersModule',
}, {
    path: '',
    redirectTo: 'accountInfo',
    pathMatch: 'full'
}]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
