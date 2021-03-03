import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { LoaderService } from 'src/app/services/loader.service';
import { ToastService } from 'src/app/services/toast.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NavParams, NavController, ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.page.html',
  styleUrls: ['./select-customer.page.scss'],
})
export class SelectCustomerPage implements OnInit {


  data: any[];
  FruitList: any;
  FruitList_temp: any;
  UnitList: any[];
  UnitList_temp: any;
  DataStatus: any;
  showFruitList: any;
  showUnitList: any;

  SelectedQty: any;
  SelectedFruit: any;
  total_cart = '';
  randomNumber: Number;
  rad: Number;
  user_id: any;

  customer_id: any;
  SetCustomer: any;
  constructor(private authService: AuthService,
    private loader: LoaderService,
    private toastService: ToastService,
    public router: Router,
    public modalCtrl: ModalController,
    public nav: NavController,
    private storageService: StorageService,
    private activatedRoute: ActivatedRoute) {
    this.SearchCustomer();



    this.storageService.getCustomerData().then((val) => {
      if (val) {
        this.customer_id = val.id;
      }
      else {

        this.customer_id = '';
        // this.storageService.setRandomNumber(this.randomNumber);

      }

    });
    // this.total_price = (this.price * this.qty);
  }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalCtrl.dismiss({
      'dismissed': true
    });
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
    this.data = [];
    const val = ev;
    console.log("Value " + val);

    if (val == undefined || val === null || val.trim() == '') {
      this.FruitList = this.FruitList_temp;
    } else if (val && val.trim() != '') {
      this.data = this.FruitList_temp.filter((item) => {
        return (item.business_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });

      console.log("Size" + this.FruitList_temp.length);
      if (this.data.length == 0) {
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

    this.customer_id = event.detail.value.id;
    this.storageService.setCustomerData(event.detail.value)



  }

  SelectCustomer() {

    if (this.customer_id != '') {
      // localStorage.setItem('CustomerData', this.customer_id);
      this.loader.loadingPresent();
      setTimeout(async () => {
        // 
        this.loader.loadingDismiss();
        console.log('Async operation has ended');
        this.toastService.presentToast("Success");
        // this.router.navigate(['home/dashboard']);
        await this.modalCtrl.dismiss({'dismissed' : true});
      }, 2000);
    }
    else {
      this.toastService.presentToast("Please Select Customer");
    }


  }


}
