import { Component, OnInit } from '@angular/core';

declare var stripe: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onBuyAngularClick() {
    stripe.redirectToCheckout({
      items: [
        {sku: 'id', quantity: 1}
      ],
      successUrl: 'http://localhost:4200/success',
      cancelUrl: 'http://localhost:4200/cancel',
    }).then(result => {
      console.log(result);
    });
  }

  onBuyVueClick() {
    stripe.redirectToCheckout({
      items: [
        {sku: 'id', quantity: 1}
      ],
      successUrl: 'http://localhost:4200/success',
      cancelUrl: 'http://localhost:4200/cancel',
    }).then(result => {
      console.log(result);
    });
  }

  onBuyReactClick() {
    stripe.redirectToCheckout({
      items: [
        {sku: 'id', quantity: 1}
      ],
      successUrl: 'http://localhost:4200/success',
      cancelUrl: 'http://localhost:4200/cancel',
    }).then(result => {
      console.log(result);
    });
  }
}
