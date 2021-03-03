import { Component, OnInit, NgZone } from '@angular/core';

import { Platform, ModalController, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { ToastService } from '../services/toast.service';
import { LoginPage } from '../pages/login/login.page';
import { StorageService } from '../services/storage.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { SelectCustomerPage } from '../pages/select-customer/select-customer.page';
import { TranslateConfigService } from '../services/translate-config.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  public selectedIndex = 0;
  public counter = 0;
  selectedLanguage: any;

  public appPages = [
    {
      title: 'Home',
      url: '/home/dashboard',
      icon: 'home-outline',
      status: true
    },

    {
      title: 'My Wish List',
      url: '/home/wish-list',
      icon: 'heart-outline',
      status: true
    },
    // {
    //   title: 'My Account',
    //   url: '/home/my-account',
    //   icon: 'person-add-outline',
    //   status: true
    // },
    {
      title: 'My Order',
      url: '/home/my-order',
      icon: 'file-tray-full-outline',
      status: true
    },
    // {
    //   title: 'Change Password',
    //   url: '/home/change-password',
    //   icon: 'key-outline',
    //   status: true
    // },
    {
      title: 'About Us',
      url: '/home/about-us',
      icon: 'cog-outline',
      status: true
    },
    {
      title: 'Privacy Policy',
      url: '/home/privacy-policy',
      icon: 'settings-outline',
      status: true
    },
    {
      title: 'F A Q',
      url: '/home/faq',
      icon: 'chatbubbles-outline',
      status: true
    },
    {
      title: 'Terms & Conditions',
      url: '/home/terms-and-conditions',
      icon: 'newspaper-outline',
      status: true

    }
  ];

  public labels = [
    {
      title: 'Select Customer',
      // url: '/home/select-customer',
      icon: 'person-add-outline',
      status: true
    }
  ]
  showBtnLogin = true;
  currentUser: any;
  public authUser: any;
  Name = "";

  Categories: any;
  Brand: any;
  // public itemsHome: any = [];//home list
  public itemsCategory: any = [];//category list
  visibleCategory = false;//for category expand
  catId: any = [];

  public itemsBrand: any = [];//category list
  visibleBrand = false;//for category expand

  price_filter: any = [1, 1];

  BrandId: any = [];

  public itemsPrice: any = [];//category list
  visiblePrice = false;//for category expand
  lang = [{ name: 'English', id: 'en' }, { name: 'Hindi', id: 'hi' }, { name: 'Gujarati', id: 'gu' }];
  BusinessName = "";
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private toastService: ToastService,
    private modalController: ModalController,
    public ngZone: NgZone,
    private authService: AuthService,
    public storageService: StorageService,
    public navCtrl: NavController,
    private router: Router,
    private translateConfigService: TranslateConfigService,
    public menuCtrl: MenuController,
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
    this.selectedLanguage = localStorage.getItem('lang');

    this.storageService.getCustomerData().then(val => {
      this.BusinessName = val.business_name;
    });
    setTimeout(() => {
      this.checkLogin();
    }, 2000);
    //for category not expand by default
    this.price_filter =
      [
        {
          min: "0",
          max: "99"
        },

        {
          min: "100",
          max: "199"
        },
        {
          min: "200",
          max: "299"
        },
        {
          min: "300",
          max: "399"
        },
        {
          min: "400",
          max: "499"
        },
        {
          min: "500",
          max: "599"
        },
      ];
    this.itemsCategory = [
      { expandedHelp: false },
    ];
    this.itemsBrand = [
      { expandedHelp: false },
    ];
    this.itemsPrice = [
      { expandedHelp: false },
    ];
    this.getCategories();
    this.ProductByCategory();
  }

  ngOnInit() {
    this.checkLogin();
  }


  languageChanged(item) {
    console.log(JSON.stringify(item));
    localStorage.setItem('lang', item);

    this.translateConfigService.setLanguage(this.selectedLanguage);
    window.location.reload();

  }


  checkLogin() {
    this.ngZone.run(() => {
      this.storageService.getData().then(val => {
        this.authUser = val;


        // console.log(val);
        if (!val) {
          // console.log(res);
          this.Name = "Guest"
          this.showBtnLogin = false;
          for (let i = 0; i < this.appPages.length; i++) {
            if (this.appPages[i].title === 'My Wish List') {
              this.appPages[i].status = false;
            }
            if (this.appPages[i].title === 'Change Password') {
              this.appPages[i].status = false;
            }
            if (this.appPages[i].title === 'My Order') {
              this.appPages[i].status = false;
            }
            if (this.appPages[i].title === 'My Account') {
              this.appPages[i].status = false;
            }
          }
        } else {
          this.Name = val.result.name;
          this.showBtnLogin = true;
          for (let i = 0; i < this.appPages.length; i++) {
            if (this.appPages[i].title === 'My Wish List') {
              this.appPages[i].status = true;
            }
            if (this.appPages[i].title === 'Change Password') {
              this.appPages[i].status = true;
            }
            if (this.appPages[i].title === 'My Order') {
              this.appPages[i].status = true;
            }
            if (this.appPages[i].title === 'My Account') {
              this.appPages[i].status = true;
            }
          }
          // this.userService.user_id = val.id;

        }
      })
    });


  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'menu1');
    this.menuCtrl.enable(false, 'menuAdmin');
  }
  logout() {
    this.authService.logout();
    this.Name = "Guest"
    for (let i = 0; i < this.appPages.length; i++) {
      if (this.appPages[i].title === 'My Wish List') {
        this.appPages[i].status = false;
      }
      if (this.appPages[i].title === 'Change Password') {
        this.appPages[i].status = false;
      }
      if (this.appPages[i].title === 'My Order') {
        this.appPages[i].status = false;
      }
      if (this.appPages[i].title === 'My Account') {
        this.appPages[i].status = false;
      }
    }
    this.showBtnLogin = false;
  }

  async SelectCustomer() {
    const modal = await this.modalController.create({
      component: SelectCustomerPage,
      componentProps: {

      }
    });
    modal.onDidDismiss()
      .then((data) => {

        const user = data['data']; // Here's your selected user!
        // console.log("Token =>" + user);
        // this.toke = user;
        window.location.reload();
        // this.navCtrl.navigateRoot('home');
      });
    return await modal.present();
  }

  //for category expandable
  expandItemCategory(item): void {
    console.log(item)
    this.visibleCategory = !this.visibleCategory;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsCategory.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }
  //for Brand expandable
  expandItemBrand(item): void {
    console.log(item)
    this.visibleBrand = !this.visibleBrand;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsBrand.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }

  //for Price expandable
  expandItemPrice(item): void {
    console.log(item)
    this.visiblePrice = !this.visiblePrice;
    if (item.expandedHelp) {
      item.expandedHelp = false;
    } else {
      this.itemsPrice.map(listItem => {
        if (item == listItem) {
          listItem.expanded = !listItem.expanded;
        } else {
          listItem.expanded = false;
        }
        return listItem;
      });
    }
  }



  checkEvent(item, name_en) {

    this.catId.push(item);

    console.log(this.catId.toString());
    localStorage.setItem('cattoken', this.catId.toString());

    this.router.navigate(['/home/all-products']).then(e => {
      this.router.navigate(['/home/products'])
    })

  }



  getCategories() {
    // this.loader.loadingPresent();
    const data = {
      lang: localStorage.getItem('lang')
    }
    this.authService.AllCategories(data).subscribe(
      (res: any) => {
        // console.log(res);
        if (res.error === false) {
          // this.loader.loadingDismiss();
          this.Categories = res.result_AllCategories;

        }
        else {
          // this.loader.loadingDismiss();
          this.toastService.presentToast(res.msg);
        }

      },
      (error: any) => {
        // this.loader.loadingDismiss();
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


  ProductByCategory() {

    const params = {
      page: '',
      sortBy: '',
      MinPrice: '',
      MaxPrice: '',
      CategoryIds: '',
      BrandId: '',
      Text: '',
      location_id: ''
    }
    this.authService.Products(JSON.stringify(params)).subscribe(
      (res: any) => {
        // console.log('Brands => ' + JSON.stringify(res));
        if (res.error === false) {
          this.Brand = res.result_products.brands;



        }
        else {

          this.toastService.presentToast(res.msg);
        }

      },
      (error: any) => {
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


  checkEventBrand(item, name_en) {

    this.BrandId.push(item);

    console.log(item + name_en);
    localStorage.setItem('BrandId', this.BrandId.toString());
    this.router.navigate(['/home/all-products']).then(e => {
      this.router.navigate(['/home/products'])
    })


  }

  checkEventPrice(min, max) {
    localStorage.setItem('price_min', min);
    localStorage.setItem('price_max', max);
    // this.router.navigate(['products']);
    this.router.navigate(['/home/all-products']).then(e => {
      this.router.navigate(['/home/products'])
    })
  }

  Reset() {

    localStorage.removeItem('cattoken');
    localStorage.removeItem('price_min');
    localStorage.removeItem('price_max');
    localStorage.removeItem('BrandId');
    window.location.reload();

    // this.menuCtrl.enable(false, 'menuAdmin');
    // localStorage.removeItem('price_max');
    // localStorage.removeItem('BrandId');
    // localStorage.removeItem('cattoken');
    // this.router.navigate(['']).then(e => {
    //   this.router.navigate(['products'])
    // })
  }
}
