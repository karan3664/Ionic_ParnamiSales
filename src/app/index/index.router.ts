import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexPage } from './index.page';
import { IndexGuard } from '../guards/index.guard';
const routes: Routes = [
  {
    path: '',
    component: IndexPage,
    canActivate: [IndexGuard],
    children: [

      {
        path: '',
        loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      }
      // {
      //   path: 'login',
      //   loadChildren: () => import('../pages/login/login.module').then(m => m.LoginPageModule)
      // },
      // {
      //   path: 'register',
      //   loadChildren: () => import('../pages/register/register.module').then(m => m.RegisterPageModule)
      // },
      // {
      //   path: 'forgotpassword',
      //   loadChildren: () => import('../pages/forgotpassword/forgotpassword.module').then(m => m.ForgotpasswordPageModule)
      // },
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndexRouter { }
