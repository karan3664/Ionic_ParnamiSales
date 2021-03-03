function _defineProperties(n,l){for(var t=0;t<l.length;t++){var e=l[t];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function _createClass(n,l,t){return l&&_defineProperties(n.prototype,l),t&&_defineProperties(n,t),n}function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{n2ia:function(n,l,t){"use strict";t.r(l);var e=t("8Y7J"),o=function n(){_classCallCheck(this,n)},i=t("pMnS"),s=t("MKJQ"),a=t("sZkV"),r=function(){function n(l,t,e,o,i,s){var a=this;_classCallCheck(this,n),this.nav=l,this.authService=t,this.router=e,this.loader=o,this.toastService=i,this.storageService=s,this.photo="assets/images/user.jpg",this.postData={name:"",email:"",password:"",password_confirmation:"",phone:"",address:"",business_name:"",user_id:""},this.storageService.getData().then((function(n){n?(a.postData.user_id=n.result_FrontLogin.id,a.ViewProfile()):a.postData.user_id=""}))}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"ViewProfile",value:function(){var n=this;this.loader.loadingPresent(),this.authService.viewProfile({user_id:this.postData.user_id}).subscribe((function(l){console.log("My shipping_addresses => "+JSON.stringify(l)),!1===l.error?(n.loader.loadingDismiss(),n.postData.name=l.result_viewProfile.name,n.postData.phone=l.result_viewProfile.phone,n.postData.address=l.result_viewProfile.address,n.postData.business_name=l.result_viewProfile.business_name,n.postData.email=l.result_viewProfile.email):(n.loader.loadingDismiss(),n.toastService.presentToast(l.msg))}),(function(l){n.loader.loadingDismiss(),null!=JSON.stringify(l.error.errors)?n.toastService.presentToast(JSON.stringify(l.error.errors)):n.toastService.presentToast("Network Issue...")}))}},{key:"validateInputs",value:function(){var n=this.postData.name.trim(),l=this.postData.phone.trim(),t=this.postData.address.trim(),e=this.postData.business_name.trim();return this.postData.name&&this.postData.phone&&this.postData.address&&this.postData.business_name&&n.length>0&&l.length>0&&t.length>0&&e.length>0}},{key:"UpdateProfile",value:function(){var n=this;this.validateInputs()?(this.loader.loadingPresent(),this.authService.updateProfile({user_id:this.postData.user_id,name:this.postData.name,phone:this.postData.phone,address:this.postData.address,business_name:this.postData.business_name}).subscribe((function(l){console.log("My shipping_addresses => "+JSON.stringify(l)),!1===l.error?(n.loader.loadingDismiss(),n.toastService.presentToast(l.msg),n.ViewProfile()):(n.loader.loadingDismiss(),n.toastService.presentToast(l.msg))}),(function(l){n.loader.loadingDismiss(),null!=JSON.stringify(l.error.errors)?n.toastService.presentToast(JSON.stringify(l.error.errors)):n.toastService.presentToast("Network Issue...")}))):(this.loader.loadingDismiss(),this.toastService.presentToast("All fields are required..."))}},{key:"goToAddress",value:function(){this.router.navigate(["/home/manage-address"])}},{key:"goToEditProfile",value:function(){this.router.navigate(["/home/edit-profile"])}}]),n}(),u=t("lGQG"),c=t("iInd"),b=t("5dVO"),p=t("2g2N"),d=t("n90K"),h=e.nb({encapsulation:0,styles:[["ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]{--color:white}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:50%;height:50%}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%], ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:22px}ion-header[_ngcontent-%COMP%]   ion-toolbar[_ngcontent-%COMP%]   ion-buttons[_ngcontent-%COMP%]   ion-badge[_ngcontent-%COMP%]{position:absolute;right:3px;bottom:14px}ion-input[_ngcontent-%COMP%]{border:1px solid var(--ion-color-primary);margin:10px 0;padding:0;font-size:18px!important;font-family:roboto-medium!important;color:#000;border-radius:2px}ion-footer[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{--color:white;margin:0;width:100%;--border-radius:0}"]],data:{}});function g(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,10,"ion-header",[["tappable",""]],null,null,null,s.hb,s.p)),e.ob(1,49152,null,0,a.C,[e.h,e.k,e.x],null,null),(n()(),e.pb(2,0,null,0,8,"ion-toolbar",[["color","light"]],null,null,null,s.Jb,s.R)),e.ob(3,49152,null,0,a.Ab,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.pb(4,0,null,0,3,"ion-buttons",[["slot","start"]],null,null,null,s.X,s.f)),e.ob(5,49152,null,0,a.m,[e.h,e.k,e.x],null,null),(n()(),e.pb(6,0,null,0,1,"ion-menu-button",[["autoHide","false"],["color","primary"]],null,null,null,s.ob,s.x)),e.ob(7,49152,null,0,a.S,[e.h,e.k,e.x],{autoHide:[0,"autoHide"],color:[1,"color"]},null),(n()(),e.pb(8,0,null,0,2,"ion-label",[["color","primary"]],null,null,null,s.lb,s.t)),e.ob(9,49152,null,0,a.O,[e.h,e.k,e.x],{color:[0,"color"]},null),(n()(),e.Hb(-1,0,[" My Account "])),(n()(),e.pb(11,0,null,null,18,"ion-content",[],null,null,null,s.db,s.l)),e.ob(12,49152,null,0,a.v,[e.h,e.k,e.x],null,null),(n()(),e.pb(13,0,null,0,16,"div",[["class","main_content_div"]],null,null,null,null,null)),(n()(),e.pb(14,0,null,null,0,"div",[["class","back_image"]],[[4,"backgroundImage",null]],null,null,null,null)),(n()(),e.pb(15,0,null,null,0,"div",[["class","white_div"]],[[4,"backgroundImage",null]],null,null,null,null)),(n()(),e.pb(16,0,null,null,13,"div",[["class","content_div"]],null,null,null,null,null)),(n()(),e.pb(17,0,null,null,2,"ion-label",[["class","usernane"]],null,null,null,s.lb,s.t)),e.ob(18,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(n()(),e.Hb(19,0,["",""])),(n()(),e.pb(20,0,null,null,2,"ion-label",[["class","location"]],null,null,null,s.lb,s.t)),e.ob(21,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(n()(),e.Hb(22,0,[" "," "])),(n()(),e.pb(23,0,null,null,6,"div",[["class","flex_div"]],null,null,null,null,null)),(n()(),e.pb(24,0,null,null,2,"ion-label",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goToEditProfile()&&e),e}),s.lb,s.t)),e.ob(25,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(n()(),e.Hb(-1,0,["Edit Profile"])),(n()(),e.pb(27,0,null,null,2,"ion-label",[],null,[[null,"click"]],(function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.goToAddress()&&e),e}),s.lb,s.t)),e.ob(28,49152,null,0,a.O,[e.h,e.k,e.x],null,null),(n()(),e.Hb(-1,0,["Manage Address"]))],(function(n,l){n(l,3,0,"light"),n(l,7,0,"false","primary"),n(l,9,0,"primary")}),(function(n,l){var t=l.component;n(l,14,0,"url(assets/logo.png)"),n(l,15,0,"url("+t.photo+")"),n(l,19,0,t.postData.name),n(l,22,0,t.postData.email)}))}var m=e.lb("app-my-account",r,(function(n){return e.Jb(0,[(n()(),e.pb(0,0,null,null,1,"app-my-account",[],null,null,null,g,h)),e.ob(1,114688,null,0,r,[a.Hb,u.a,c.m,b.a,p.a,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),f=t("SVse"),_=t("s7LF"),v=function n(){_classCallCheck(this,n)};t.d(l,"MyAccountPageModuleNgFactory",(function(){return P}));var P=e.mb(o,[],(function(n){return e.yb([e.zb(512,e.j,e.X,[[8,[i.a,m]],[3,e.j],e.v]),e.zb(4608,f.k,f.j,[e.s,[2,f.s]]),e.zb(4608,_.m,_.m,[]),e.zb(4608,a.c,a.c,[e.x,e.g]),e.zb(4608,a.Gb,a.Gb,[a.c,e.j,e.p]),e.zb(4608,a.Kb,a.Kb,[a.c,e.j,e.p]),e.zb(1073742336,f.b,f.b,[]),e.zb(1073742336,_.l,_.l,[]),e.zb(1073742336,_.b,_.b,[]),e.zb(1073742336,a.Cb,a.Cb,[]),e.zb(1073742336,c.o,c.o,[[2,c.t],[2,c.m]]),e.zb(1073742336,v,v,[]),e.zb(1073742336,o,o,[]),e.zb(1024,c.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);