import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import {Orders} from '../orders-interface/orders';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  orders: Orders;

  constructor(private route: ActivatedRoute) { }

  showOrders() {
    this.route.data.subscribe((data: Orders) => {
      this.orders = data['orderListResolveData']['orders'];
      console.log(this.orders);
    });
  }

  ngOnInit() {
    this.showOrders();
  }

}
