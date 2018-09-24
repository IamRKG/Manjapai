import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountInfoComponent } from './account-info/account-info.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  imports: [
    CommonModule,
    AccountRoutingModule,
    FontAwesomeModule
  ],
  declarations: [AccountInfoComponent],
})
export class AccountModule { }