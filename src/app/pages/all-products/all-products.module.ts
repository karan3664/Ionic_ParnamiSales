import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AllProductsPageRoutingModule } from './all-products-routing.module';

import { AllProductsPage } from './all-products.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TranslateModule.forChild(),
    IonicModule,
    AllProductsPageRoutingModule
  ],
  declarations: [AllProductsPage]
})
export class AllProductsPageModule {}
