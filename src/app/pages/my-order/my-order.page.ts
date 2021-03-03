import { Component, OnInit } from '@angular/core';
import { UserDataService } from 'src/app/services/user-data.service';
import { AuthService } from 'src/app/services/auth.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { StorageService } from 'src/app/services/storage.service';
import { AlertController, ModalController, MenuController } from '@ionic/angular';
import { SelectCustomerPage } from '../select-customer/select-customer.page';
import * as moment from "moment";

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.page.html',
  styleUrls: ['./my-order.page.scss'],
})
export class MyOrderPage implements OnInit {
  alldata: any;
  isItemAvailable: boolean = false;
  data: any[];
  user_id: any;
  total_dc: any;
  FromDate: any;
  ToDate: any;
  TotalPrice = 0;
  sum: any;
  customer_id: any;
  customer: any;
  lang: any;
  Customer: any;
  FruitList: any;
  FruitList_temp: any;
  UnitList: any[];
  UnitList_temp: any;
  DataStatus: any;
  showFruitList: any;
  showUnitList: any;
  searchData: any;
  SelectedQty: any;
  SelectedFruit: any;
  total_cart = '';
  randomNumber: Number;
  rad: Number;
  SetCustomer: any;
  business_name = "";
  orderStatus: any;
  OrderStatus = [{ name: 'Pending', id: 'Pending' }, { name: 'In Process', id: 'In Process' }, { name: 'Closed', id: 'Closed' }];
  constructor(private authService: AuthService,
    public storageService: StorageService,
    private route: Router,
    private loader: LoaderService,
    public alertCtrl: AlertController,
    public modalController: ModalController,
    private router: Router,
    public menuCtrl: MenuController,
    private toastService: ToastService) {
    this.lang = localStorage.getItem('lang');

    // this.getCustomerList();
    this.SearchCustomer();


    this.storageService.getData().then((val) => {
      if (val) {
        this.user_id = val.result.id;
        this.getMyOrder();

      }
      else {
        this.user_id = '';
        // this.storageService.setRandomNumber(this.randomNumber);

      }

    });

    this.storageService.getCustomerData().then(async (val) => {
      if (val) {
        this.customer_id = val.id;
        this.getMyOrder();
      }
      else {

        this.customer_id = '';

      }

    });



  }

  ngOnInit() {

  }

  Reset() {
    this.getMyOrder();
    this.customer = '';
    this.FromDate = [];
    this.ToDate = [];
    this.orderStatus = '';
    this.SelectedFruit = [];
    this.showFruitList = false;
    // localStorage.removeItem('u');
   
  }
  doRefresh(event) {
    console.log('Begin async operation');
    this.getMyOrder();
    setTimeout(() => {
      // 
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  getMyOrder() {
    // this.loader.loadingPresent();
    const data = {
      // user_id: this.customer_id,
      sales_person_id: this.user_id,
      lang: this.lang
    }
    console.log(JSON.stringify(data));
    this.authService.MyOrders(data).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));

        if (res.error === false) {
          // this.loader.loadingDismiss();

          this.data = res.result_MyOrders;

          this.alldata = res.result_MyOrders;

          this.total_dc = this.data.length;
          this.TotalPrice = 0;
          for (let i = 0; i < this.data.length; i++) {
            // this.sum += res.result_DeliveryChallanAPI_DCList[i].total_price;   
            this.TotalPrice += Number(this.data[i].total_price);

            this.business_name = res.result_MyOrders[i].business_name;
          }

        }
        else {
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
  }


  getCustomerList() {
    const data = {
      search: ''
    }
    this.authService.CustomerList(data).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));
        if (res.error === false) {

          this.Customer = res.resulta_CustomerList;

        } else {
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
  }
  ViewInvoice(id) {
    console.log('Karan=>' + id);
    localStorage.setItem('myorderid', id);
    this.route.navigate(['/home/view-invoice']);
  }

  Delete(id) {

  }

  OrderStatusSelect(value) {
    console.log(JSON.stringify(value));
    localStorage.setItem('o', value.id);
    this.loader.loadingPresent();
    const data = {
      user_id: '',
      sales_person_id: this.user_id,
      from_date: '',
      to_date: '',
      delivety_status: value.id
    }
    console.log(JSON.stringify(data));
    this.authService.MyOrders(data).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));

        if (res.error === false) {
          this.loader.loadingDismiss();

          this.data = res.result_MyOrders;

          this.alldata = res.result_MyOrders;



        }
        else {
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

  showdate() {
    // this.loader.loadingPresent();

    const date_dc_date = moment(this.FromDate).format('DD/MM/YYYY');
    const new_dc_date = date_dc_date.toString().substring(0, 10);

    const too_date = moment(this.ToDate).format('DD/MM/YYYY');
    const new_to_date = too_date.toString().substring(0, 10);


    this.loader.loadingPresent();
    const data = {
      user_id: this.customer_id,
      sales_person_id: this.user_id,
      from_date: new_dc_date,
      to_date: new_to_date,
      delivety_status: ''
    }
    console.log(JSON.stringify(data));
    this.authService.MyOrders(data).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));

        if (res.error === false) {
          this.loader.loadingDismiss();

          this.data = res.result_MyOrders;

          this.alldata = res.result_MyOrders;

          // this.total_dc = this.data.length;

          // for (let i = 0; i < this.data.length; i++) {
          //   // this.sum += res.result_DeliveryChallanAPI_DCList[i].total_price;   
          //   this.TotalPrice += Number(this.data[i].total_price);


          // }

        }
        else {
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


  getProduct(data) {
    // console.log(data);

    return data.product_name;
  }

  getQty(data) {
    return data.qty;
  }


  SearchCustomer() {

    this.loader.loadingPresent();

    const data = {
      search: this.SelectedFruit
    }
    this.authService.CustomerList(data).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));
        if (res.error === false) {

          this.loader.loadingDismiss();
          this.FruitList = res.resulta_CustomerList;
          this.FruitList_temp = res.resulta_CustomerList;
          this.SetCustomer = res.resulta_CustomerList;
          // this.toast.presentToast(res.msg);
        } else {
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

  getItems(ev: any) {
    console.log(JSON.stringify(ev));
    // Reset items back to all of the items
    this.FruitList = this.FruitList_temp;
    this.searchData = [];
    const val = ev;
    console.log("Value " + val);

    if (val == undefined || val === null || val.trim() == '') {
      this.FruitList = this.FruitList_temp;
    } else if (val && val.trim() != '') {
      this.searchData = this.FruitList_temp.filter((item) => {
        return (item.business_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });

      console.log("Size" + this.FruitList_temp.length);
      if (this.searchData.length == 0) {
        this.DataStatus = 1;
      } else {
        this.DataStatus = 0;
      }
    }
  }


  checkFocus(flag: any) {
    if (flag == 'icon') {
      this.showFruitList = !this.showFruitList;
      this.showUnitList = true;
      // this.SetCustomer =  false;

    } else {
      this.showFruitList = true;
      this.showUnitList = true;
      // this.SetCustomer =  true;

    }

  }
  checkFocus2(flag: any) {
    if (flag == 'icon') {
      this.showUnitList = !this.showUnitList;
      this.showFruitList = true;
    } else {
      this.showUnitList = true;
      this.showFruitList = true;
    }
  }

  setdata(data) {
    console.log(data)
    this.UnitList = [];
    this.SelectedFruit = data.business_name;



    this.UnitList.push(data);

    this.showFruitList = true;
    this.showUnitList = true;
  }

  setdata2(data) {
    this.UnitList = [];
    console.log(data)


    this.UnitList.push(data);
    this.showFruitList = true;
    this.showUnitList = true;
  }


  MakeDefault(event) {
    console.log(event.detail.value);
    this.business_name = event.detail.value.business_name;
    this.showFruitList = false;

    this.customer_id = event.detail.value.id;
    // this.storageService.setCustomerData(event.detail.value)
    localStorage.setItem('u', event.detail.value.id);
    this.loader.loadingPresent();
    const data = {
      user_id: event.detail.value.id,
      sales_person_id: this.user_id,
      from_date: '',
      to_date: '',
      delivety_status: ''
    }
    console.log(JSON.stringify(data));
    this.authService.MyOrders(data).subscribe(
      (res: any) => {
        console.log(JSON.stringify(res));

        if (res.error === false) {
          this.loader.loadingDismiss();

          this.data = res.result_MyOrders;

          this.alldata = res.result_MyOrders;



        }
        else {
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







  ionViewWillEnter() {
    this.menuCtrl.enable(true, 'menu1');
    this.menuCtrl.enable(false, 'menuAdmin');
  }





}
