import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-thankyou-page',
  templateUrl: './thankyou-page.page.html',
  styleUrls: ['./thankyou-page.page.scss'],
})
export class ThankyouPagePage implements OnInit {

  constructor(public nav: NavController,
    private platform: Platform) { }

  ngOnInit() {
    this.platform.ready().then(() => {

      this.platform.backButton.subscribe(() => {
        this.nav.navigateBack("/home/dashboard");
      });
    });
  }
  goToProductPage() {
    this.nav.navigateForward("/home/products");
  }
  goToCartPage() {
    this.nav.navigateForward("/home/cart");
  }
  goToOrderPage() {
    this.nav.navigateForward("/home/my-order");
  }
  goToSearchPage() {
    this.nav.navigateForward("/home/search");

  }
}
