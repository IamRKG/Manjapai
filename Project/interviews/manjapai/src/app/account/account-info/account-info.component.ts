import { Component, OnInit} from '@angular/core';

import { faUser } from '@fortawesome/free-solid-svg-icons';

import { ActivatedRoute, Router} from '@angular/router';
import { AccountInfo } from '../account-info-interface/account-info';

@Component({
  selector: 'app-account-info',
  templateUrl: './account-info.component.html',
  styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent implements OnInit {

  faUser = faUser;
  accountInfo: AccountInfo;

  constructor(private route: ActivatedRoute, private router: Router) { }

  showAccountInfo() {
      this.route.data.subscribe((data: AccountInfo) => {
        this.accountInfo = data['accountInfoResolveData'];
      });
  }

  ngOnInit() {
    this.showAccountInfo();
  }
  myOrder() {
    this.router.navigate(['/orders']);
  }
}
