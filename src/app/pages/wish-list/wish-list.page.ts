import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { NavController, MenuController, ActionSheetController, IonContent, AlertController, ModalController } from '@ionic/angular';
import { AppComponent } from 'src/app/app.component';
import { StorageService } from 'src/app/services/storage.service';
import { interval } from 'rxjs';
import { SelectCustomerPage } from '../select-customer/select-customer.page';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.page.html',
  styleUrls: ['./wish-list.page.scss'],
})
export class WishListPage implements OnInit {


  gridVisiable = true;
  public products: any = [];
  postData: any = [{
    product_name: '',
    unit_name: ''
  }];
  lang: any;
  user_id: any;
  total_cart = '';
  constructor(private route: ActivatedRoute,
    public menuCtrl: MenuController,
    public appcompo: AppComponent,
    public actionSheetController: ActionSheetController,
    public nav: NavController,
    public router: Router,
    private alertCtrl: AlertController,
    private authService: AuthService,
    private loader: LoaderService,
    public modalController: ModalController,
    private toastService: ToastService,
    private storageService: StorageService) {
    this.lang = localStorage.getItem('lang');
    this.storageService.getCustomerData().then((val) => {
      if (val) {
        this.user_id = val.id;

      }
      else {
        this.user_id = '';
        // this.storageService.setRandomNumber(this.randomNumber);

      }

    });

    interval(100).subscribe(x => {
      this.storageService.getCartCount().then((val) => {
        if (val) {
          this.total_cart = val;
        }
        else {
          this.total_cart = '0';


        }

      });
    });
    setTimeout(async () => {
      if (this.user_id != '') {
        this.ProductByCategory();
      }
      else {
        const alert = await this.alertCtrl.create({
          header: 'Please Select Customer',
          buttons: [
            {
              text: 'Dismiss',
              role: 'cancel',
              handler: () => {
                console.log('Cancel clicked');
              }
            },
            {
              text: 'Select',
              handler: async () => {
                const modal = await this.modalController.create({
                  component: SelectCustomerPage,
                  componentProps: {

                  }
                });
                modal.onDidDismiss()
                  .then((data) => {
                    window.location.reload();
                  });
                return await modal.present();
              }
            }
          ]
        });
        await alert.present();
      }
    }, 500)
  }

  ngOnInit() {
    // this.menuCtrl.enable(true, 'menuAdmin');

  }
  ProductByCategory() {
    this.loader.loadingPresent();
    const data = {
      user_id: this.user_id,
      lang: this.lang
    }
    this.authService.MyWishList(data).subscribe(
      (res: any) => {
        console.log(res);
        if (res.error === false) {
          this.loader.loadingDismiss();
          this.products = res.result_MyWishList;

          if (this.products.length == 0) {
            this.gridVisiable = false;
          }

        }
        else {
          this.loader.loadingDismiss();
          this.toastService.presentToast(res.msg);
        }

      },
      (error: any) => {
        this.loader.loadingDismiss();
        if (JSON.stringify(error.error.errors) != null) {
          this.toastService.presentToast(JSON.stringify(error.error.errors));
        }
        else {
          this.toastService.presentToast("Network Issue...");
        }
      }
    );
    // this.postData.Suppliers = JSON.stringify(this.data['to_name']);
  }

  openProductsPage() {
    this.nav.navigateForward("/home/dashboard");
  }

  goToSearchPage() {
    this.nav.navigateForward("/home/search");
  }
  goToCartPage() {
    this.nav.navigateForward("/home/cart");
  }
  goToProductDetail(id) {
    this.router.navigate(["/home/product-details/", id]);
  }

  removeItem(id) {
    this.loader.loadingPresent();
    const data = {
      product_id: id,
      user_id: this.user_id
    }
    this.authService.remove_product_from_wishlist(data).subscribe(
      (res: any) => {
        console.log(res);
        if (res.error === false) {
          this.loader.loadingDismiss();
          // this.products = res.result_MyWishList;


          this.toastService.presentToast(res.msg);
          this.ProductByCategory();
        }
        else {
          this.loader.loadingDismiss();
          this.toastService.presentToast(res.msg);
        }

      },
      (error: any) => {
        this.loader.loadingDismiss();
        if (JSON.stringify(error.error.errors) != null) {
          this.toastService.presentToast(JSON.stringify(error.error.errors));
        }
        else {
          this.toastService.presentToast("Network Issue...");
        }
      }
    );
  }
}
