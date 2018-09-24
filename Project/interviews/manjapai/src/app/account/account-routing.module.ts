import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import{ AccountInfoComponent } from './account-info/account-info.component';

import{ AccountInfoResolverGuard } from '../account/account-info-resolver/account-info-resolver.guard'

const routes: Routes = [{
  path: '',
  component: AccountInfoComponent,
  resolve: {
    accountInfoResolveData: AccountInfoResolverGuard
  }
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
