import { Component, OnInit, Input } from '@angular/core';
import { Orders } from '../orders-interface/orders';


@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {

  @Input() orders:Orders
  
  constructor() { }
  
  ngOnInit() {
  }

}
