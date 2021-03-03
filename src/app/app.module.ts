import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ComponentsModule } from './components/components.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';
import { LoginPageModule } from './pages/login/login.module';
import { AddAddressPageModule } from './pages/add-address/add-address.module';
import { EditAddressPageModule } from './pages/edit-address/edit-address.module';
import { RegisterPageModule } from './pages/register/register.module';
import { WriteReviewPageModule } from './pages/write-review/write-review.module';
import { ForgotpasswordPageModule } from './pages/forgotpassword/forgotpassword.module';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonicRatingModule } from 'ionic-rating';
import { AddtocartPopupPageModule } from './pages/addtocart-popup/addtocart-popup.module';
import { SelectCustomerPage } from './pages/select-customer/select-customer.page';
import { SelectCustomerPageModule } from './pages/select-customer/select-customer.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateConfigService } from './services/translate-config.service';
import { File } from '@ionic-native/file/ngx';

export function LanguageLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}
@NgModule({
  declarations: [AppComponent],
  entryComponents: [SelectCustomerPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    IonicRatingModule,
    
    SelectCustomerPageModule,
    IonicStorageModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (LanguageLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    StatusBar,
    File,
    SplashScreen,
    SocialSharing,
    TranslateConfigService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
