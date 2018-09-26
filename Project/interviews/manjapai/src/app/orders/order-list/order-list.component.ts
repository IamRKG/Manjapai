import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import {Orders} from '../orders-interface/orders';


@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Orders;

  constructor(private route: ActivatedRoute, private router: Router) { }

  showOrders() {
    this.route.data.subscribe((data: Orders) => {
      this.orders = data['orderListResolveData']['orders'];
    });
  }

  navigateToOrderDetails(orders: Orders, diplayTemp: string) {
    this.router.navigate([orders.id, { order: diplayTemp }], { relativeTo: this.route });

  }

  ngOnInit() {
    this.showOrders();
  }

}
