(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{n2ia:function(n,l,t){"use strict";t.r(l);var o=t("8Y7J");class s{}var e=t("pMnS"),i=t("MKJQ"),a=t("sZkV");class r{constructor(n,l,t,o,s,e){this.nav=n,this.authService=l,this.router=t,this.loader=o,this.toastService=s,this.storageService=e,this.photo="assets/images/user.jpg",this.postData={name:"",email:"",password:"",password_confirmation:"",phone:"",address:"",business_name:"",user_id:""},this.storageService.getData().then(n=>{n?(this.postData.user_id=n.result_FrontLogin.id,this.ViewProfile()):this.postData.user_id=""})}ngOnInit(){}ViewProfile(){this.loader.loadingPresent(),this.authService.viewProfile({user_id:this.postData.user_id}).subscribe(n=>{console.log("My shipping_addresses => "+JSON.stringify(n)),!1===n.error?(this.loader.loadingDismiss(),this.postData.name=n.result_viewProfile.name,this.postData.phone=n.result_viewProfile.phone,this.postData.address=n.result_viewProfile.address,this.postData.business_name=n.result_viewProfile.business_name,this.postData.email=n.result_viewProfile.email):(this.loader.loadingDismiss(),this.toastService.presentToast(n.msg))},n=>{this.loader.loadingDismiss(),null!=JSON.stringify(n.error.errors)?this.toastService.presentToast(JSON.stringify(n.error.errors)):this.toastService.presentToast("Network Issue...")})}validateInputs(){const n=this.postData.name.trim(),l=this.postData.phone.trim(),t=this.postData.address.trim(),o=this.postData.business_name.trim();return this.postData.name&&this.postData.phone&&this.postData.address&&this.postData.business_name&&n.length>0&&l.length>0&&t.length>0&&o.length>0}UpdateProfile(){this.validateInputs()?(this.loader.loadingPresent(),this.authService.updateProfile({user_id:this.postData.user_id,name:this.postData.name,phone:this.postData.phone,address:this.postData.address,business_name:this.postData.business_name}).subscribe(n=>{console.log("My shipping_addresses => "+JSON.stringify(n)),!1===n.error?(this.loader.loadingDismiss(),this.toastService.presentToast(n.msg),this.ViewProfile()):(this.loader.loadingDismiss(),this.toastService.presentToast(n.msg))},n=>{this.loader.loadingDismiss(),null!=JSON.stringify(n.error.errors)?this.toastService.presentToast(JSON.stringify(n.error.errors)):this.toastService.presentToast("Network Issue...")})):(this.loader.loadingDismiss(),this.toastService.presentToast("All fields are required..."))}goToAddress(){this.router.navigate(["/home/manage-address"])}goToEditProfile(){this.router.navigate(["/home/edit-profile"])}}var u=t("lGQG"),b=t("iInd"),c=t("5dVO"),p=t("2g2N"),d=t("n90K"),h=o.nb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--color:white}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;height:50%}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:22px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{position:absolute;right:3px;bottom:14px}ion-input[_ngcontent-%COMP%]{border:1px solid var(--ion-color-primary);margin:10px 0;padding:0;font-size:18px!important;font-family:roboto-medium!important;color:#000;border-radius:2px}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:white;margin:0;width:100%;--border-radius:0}"]],data:{}});function g(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,10,"ion-header",[["tappable",""]],null,null,null,i.hb,i.p)),o.ob(1,49152,null,0,a.C,[o.h,o.k,o.x],null,null),(n()(),o.pb(2,0,null,0,8,"ion-toolbar",[["color","light"]],null,null,null,i.Jb,i.R)),o.ob(3,49152,null,0,a.Ab,[o.h,o.k,o.x],{color:[0,"color"]},null),(n()(),o.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,i.X,i.f)),o.ob(5,49152,null,0,a.m,[o.h,o.k,o.x],null,null),(n()(),o.pb(6,0,null,0,1,"ion-menu-button",[["autoHide","false"],["color","primary"]],null,null,null,i.ob,i.x)),o.ob(7,49152,null,0,a.S,[o.h,o.k,o.x],{autoHide:[0,"autoHide"],color:[1,"color"]},null),(n()(),o.pb(8,0,null,0,2,"ion-label",[["color","primary"]],null,null,null,i.lb,i.t)),o.ob(9,49152,null,0,a.O,[o.h,o.k,o.x],{color:[0,"color"]},null),(n()(),o.Hb(-1,0,[" My Account "])),(n()(),o.pb(11,0,null,null,18,"ion-content",[],null,null,null,i.db,i.l)),o.ob(12,49152,null,0,a.v,[o.h,o.k,o.x],null,null),(n()(),o.pb(13,0,null,0,16,"div",[["class","main_content_div"]],null,null,null,null,null)),(n()(),o.pb(14,0,null,null,0,"div",[["class","back_image"]],[[4,"backgroundImage",null]],null,null,null,null)),(n()(),o.pb(15,0,null,null,0,"div",[["class","white_div"]],[[4,"backgroundImage",null]],null,null,null,null)),(n()(),o.pb(16,0,null,null,13,"div",[["class","content_div"]],null,null,null,null,null)),(n()(),o.pb(17,0,null,null,2,"ion-label",[["class","usernane"]],null,null,null,i.lb,i.t)),o.ob(18,49152,null,0,a.O,[o.h,o.k,o.x],null,null),(n()(),o.Hb(19,0,["",""])),(n()(),o.pb(20,0,null,null,2,"ion-label",[["class","location"]],null,null,null,i.lb,i.t)),o.ob(21,49152,null,0,a.O,[o.h,o.k,o.x],null,null),(n()(),o.Hb(22,0,[" "," "])),(n()(),o.pb(23,0,null,null,6,"div",[["class","flex_div"]],null,null,null,null,null)),(n()(),o.pb(24,0,null,null,2,"ion-label",[],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.goToEditProfile()&&o),o}),i.lb,i.t)),o.ob(25,49152,null,0,a.O,[o.h,o.k,o.x],null,null),(n()(),o.Hb(-1,0,["Edit Profile"])),(n()(),o.pb(27,0,null,null,2,"ion-label",[],null,[[null,"click"]],(function(n,l,t){var o=!0;return"click"===l&&(o=!1!==n.component.goToAddress()&&o),o}),i.lb,i.t)),o.ob(28,49152,null,0,a.O,[o.h,o.k,o.x],null,null),(n()(),o.Hb(-1,0,["Manage Address"]))],(function(n,l){n(l,3,0,"light"),n(l,7,0,"false","primary"),n(l,9,0,"primary")}),(function(n,l){var t=l.component;n(l,14,0,"url(assets/logo.png)"),n(l,15,0,"url("+t.photo+")"),n(l,19,0,t.postData.name),n(l,22,0,t.postData.email)}))}function m(n){return o.Jb(0,[(n()(),o.pb(0,0,null,null,1,"app-my-account",[],null,null,null,g,h)),o.ob(1,114688,null,0,r,[a.Hb,u.a,b.m,c.a,p.a,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}var _=o.lb("app-my-account",r,m,{},{},[]),v=t("SVse"),f=t("s7LF");class P{}t.d(l,"MyAccountPageModuleNgFactory",(function(){return D}));var D=o.mb(s,[],(function(n){return o.yb([o.zb(512,o.j,o.X,[[8,[e.a,_]],[3,o.j],o.v]),o.zb(4608,v.k,v.j,[o.s,[2,v.s]]),o.zb(4608,f.m,f.m,[]),o.zb(4608,a.c,a.c,[o.x,o.g]),o.zb(4608,a.Gb,a.Gb,[a.c,o.j,o.p]),o.zb(4608,a.Kb,a.Kb,[a.c,o.j,o.p]),o.zb(1073742336,v.b,v.b,[]),o.zb(1073742336,f.l,f.l,[]),o.zb(1073742336,f.b,f.b,[]),o.zb(1073742336,a.Cb,a.Cb,[]),o.zb(1073742336,b.o,b.o,[[2,b.t],[2,b.m]]),o.zb(1073742336,P,P,[]),o.zb(1073742336,s,s,[]),o.zb(1024,b.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);