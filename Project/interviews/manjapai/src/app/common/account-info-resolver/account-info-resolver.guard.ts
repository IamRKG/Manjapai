import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AccountInfo } from '../../account/account-info-interface/account-info';
import {AccountInfoService} from '../account-info-services/account-info.service';


@Injectable({
  providedIn: 'root'
})
export class AccountInfoResolverGuard implements Resolve<AccountInfo> {
  constructor(private accountInfoService: AccountInfoService) { }
  resolve(): Observable<AccountInfo> {
    return this.accountInfoService.getAccountInfo();
  }
}
