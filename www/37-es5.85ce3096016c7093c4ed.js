function _defineProperties(l,n){for(var o=0;o<n.length;o++){var u=n[o];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(l,u.key,u)}}function _createClass(l,n,o){return n&&_defineProperties(l.prototype,n),o&&_defineProperties(l,o),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{NDCP:function(l,n,o){"use strict";o.r(n);var u=o("8Y7J"),e=function l(){_classCallCheck(this,l)},r=o("pMnS"),i=o("MKJQ"),t=o("sZkV"),a=o("SVse"),c=function(){function l(n,o,u){_classCallCheck(this,l),this.authService=n,this.loader=o,this.toastService=u,this.PrivacyPolicy()}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"PrivacyPolicy",value:function(){var l=this;this.loader.loadingPresent(),this.authService.PrivacyPolicy().subscribe((function(n){console.log(n),!1===n.error?(l.loader.loadingDismiss(),l.data=n.result_PrivacyPolicy.desc):(l.loader.loadingDismiss(),l.toastService.presentToast(n.msg))}),(function(n){l.loader.loadingDismiss(),null!=JSON.stringify(n.error.errors)?l.toastService.presentToast(JSON.stringify(n.error.errors)):l.toastService.presentToast("Network Issue...")}))}}]),l}(),s=o("lGQG"),b=o("5dVO"),p=o("2g2N"),f=u.nb({encapsulation:0,styles:[[""]],data:{}});function y(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,4,"ion-content",[["padding",""]],null,null,null,i.db,i.l)),u.ob(1,49152,null,0,t.v,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,2,"ion-label",[["style","padding: 10px;"]],null,null,null,i.lb,i.t)),u.ob(3,49152,null,0,t.O,[u.h,u.k,u.x],null,null),(l()(),u.Hb(4,0,[" "," "]))],null,(function(l,n){l(n,4,0,n.component.data)}))}function h(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,10,"ion-header",[["tappable",""]],null,null,null,i.hb,i.p)),u.ob(1,49152,null,0,t.C,[u.h,u.k,u.x],null,null),(l()(),u.pb(2,0,null,0,8,"ion-toolbar",[["color","light"]],null,null,null,i.Jb,i.R)),u.ob(3,49152,null,0,t.Ab,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.pb(4,0,null,0,3,"ion-menu-button",[["slot","start"]],null,null,null,i.ob,i.x)),u.ob(5,49152,null,0,t.S,[u.h,u.k,u.x],null,null),(l()(),u.pb(6,0,null,0,1,"ion-icon",[["color","primary"],["name","menu"]],null,null,null,i.ib,i.q)),u.ob(7,49152,null,0,t.D,[u.h,u.k,u.x],{color:[0,"color"],name:[1,"name"]},null),(l()(),u.pb(8,0,null,0,2,"ion-title",[["color","primary"]],null,null,null,i.Ib,i.Q)),u.ob(9,49152,null,0,t.yb,[u.h,u.k,u.x],{color:[0,"color"]},null),(l()(),u.Hb(-1,0,["Privacy Policy"])),(l()(),u.eb(16777216,null,null,1,null,y)),u.ob(12,16384,null,0,a.i,[u.M,u.J],{ngIf:[0,"ngIf"]},null)],(function(l,n){var o=n.component;l(n,3,0,"light"),l(n,7,0,"primary","menu"),l(n,9,0,"primary"),l(n,12,0,o.data)}),null)}var d=u.lb("app-privacy-policy",c,(function(l){return u.Jb(0,[(l()(),u.pb(0,0,null,null,1,"app-privacy-policy",[],null,null,null,h,f)),u.ob(1,114688,null,0,c,[s.a,b.a,p.a],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),v=o("s7LF"),m=o("iInd"),g=function l(){_classCallCheck(this,l)};o.d(n,"PrivacyPolicyPageModuleNgFactory",(function(){return k}));var k=u.mb(e,[],(function(l){return u.yb([u.zb(512,u.j,u.X,[[8,[r.a,d]],[3,u.j],u.v]),u.zb(4608,a.k,a.j,[u.s,[2,a.s]]),u.zb(4608,v.m,v.m,[]),u.zb(4608,t.c,t.c,[u.x,u.g]),u.zb(4608,t.Gb,t.Gb,[t.c,u.j,u.p]),u.zb(4608,t.Kb,t.Kb,[t.c,u.j,u.p]),u.zb(1073742336,a.b,a.b,[]),u.zb(1073742336,v.l,v.l,[]),u.zb(1073742336,v.b,v.b,[]),u.zb(1073742336,t.Cb,t.Cb,[]),u.zb(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),u.zb(1073742336,g,g,[]),u.zb(1073742336,e,e,[]),u.zb(1024,m.k,(function(){return[[{path:"",component:c}]]}),[])])}))}}]);