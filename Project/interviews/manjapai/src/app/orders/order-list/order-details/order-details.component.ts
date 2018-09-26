import {Component, OnInit} from '@angular/core';
import {Orders} from '../../orders-interface/orders';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  ordersDetails: Orders;
  order: any[];
  getOrderOrProductDetailsTemplate: string;
  constructor(private route: ActivatedRoute) { }


  showOrderDetails() {
    this.route.data.subscribe((data: Orders) => {
      const id = this.route.snapshot.paramMap.get('id');
      this.getOrderOrProductDetailsTemplate = this.route.snapshot.paramMap.get('order');
      this.ordersDetails = data['orderDetailsResolveData']['orders'];
      this.order = this.ordersDetails['find'](function (orders: Orders) {
          if ( orders.id === id ) {
            return orders;
          } else {
            return undefined;
          }
        });
        for (let i = 0; i < this.ordersDetails[length]; i++){
            console.log(i)
        }
    });
  }


  ngOnInit() {
    this.showOrderDetails();
  }

}
