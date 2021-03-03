import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { MenuComponentComponent } from '../components/menu-component/menu-component.component';
import { LoginPage } from '../pages/login/login.page';
import { AddAddressPage } from '../pages/add-address/add-address.page';
import { EditAddressPage } from '../pages/edit-address/edit-address.page';
import { WriteReviewPage } from '../pages/write-review/write-review.page';
import { AddtocartPopupPage } from '../pages/addtocart-popup/addtocart-popup.page';
import { AddAddressPageModule } from '../pages/add-address/add-address.module';
import { EditAddressPageModule } from '../pages/edit-address/edit-address.module';
import { WriteReviewPageModule } from '../pages/write-review/write-review.module';
import { AddtocartPopupPageModule } from '../pages/addtocart-popup/addtocart-popup.module';
import { HomeRouter } from './home.router';
import { SelectCustomerPage } from '../pages/select-customer/select-customer.page';
import { SelectCustomerPageModule } from '../pages/select-customer/select-customer.module';
import { CouponPage } from '../pages/coupon/coupon.page';
import { CouponPageModule } from '../pages/coupon/coupon.module';
import { ComponentsModule } from '../components/components.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [HomePage, MenuComponentComponent],
  entryComponents: [AddAddressPage,
    EditAddressPage, WriteReviewPage, AddtocartPopupPage,CouponPage, SelectCustomerPage],
  imports: [
    HomeRouter,
    CommonModule,
    FormsModule,
    IonicModule,
    ComponentsModule,
    AddAddressPageModule,
    EditAddressPageModule,
    WriteReviewPageModule,
    AddtocartPopupPageModule,
    SelectCustomerPageModule,
    CouponPageModule,
    TranslateModule.forChild(),
    HomePageRoutingModule
  ]


})
export class HomePageModule { }
