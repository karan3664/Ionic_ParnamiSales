import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectCustomerPageRoutingModule } from './select-customer-routing.module';

import { SelectCustomerPage } from './select-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectCustomerPageRoutingModule
  ],
  declarations: [SelectCustomerPage]
})
export class SelectCustomerPageModule {}
