import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { HomeGuard } from '../guards/home.guard';
import { UserDataResolver } from '../resolvers/userData.resolver';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage,
    canActivate: [HomeGuard],
    resolve: {
      userData: UserDataResolver
    },
    children: [

      // {
      //   path: 'supplier/dashboard',
      //   loadChildren: () => import('../pages/supplier/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      // }

      {
        path: 'dashboard',
        loadChildren: () => import('../pages/dashboard/dashboard.module').then(m => m.DashboardPageModule)
      },
      {

        // path: 'product-details',
        path: 'product-details/:id',

        loadChildren: () => import('../pages/product-details/product-details.module').then(m => m.ProductDetailsPageModule)
      },
      {
        path: 'products',
        loadChildren: () => import('../pages/products/products.module').then(m => m.ProductsPageModule)
      },
      {
        path: 'cart',
        loadChildren: () => import('../pages/cart/cart.module').then(m => m.CartPageModule)
      },
      {
        path: 'search',
        loadChildren: () => import('../pages/search/search.module').then(m => m.SearchPageModule)
      },

      {
        path: 'shipping-address',
        loadChildren: () => import('../pages/shipping-address/shipping-address.module').then(m => m.ShippingAddressPageModule)
      },
      {
        path: 'add-address',
        loadChildren: () => import('../pages/add-address/add-address.module').then(m => m.AddAddressPageModule)
      },
      {
        path: 'payment-method',
        loadChildren: () => import('../pages/payment-method/payment-method.module').then(m => m.PaymentMethodPageModule)
      },
      {
        path: 'wish-list',
        loadChildren: () => import('../pages/wish-list/wish-list.module').then(m => m.WishListPageModule)
      },
      {
        path: 'my-account',
        loadChildren: () => import('../pages/my-account/my-account.module').then(m => m.MyAccountPageModule)
      },
      {
        path: 'my-order',
        loadChildren: () => import('../pages/my-order/my-order.module').then(m => m.MyOrderPageModule)
      },
      {
        path: 'change-password',
        loadChildren: () => import('../pages/change-password/change-password.module').then(m => m.ChangePasswordPageModule)
      },
      {
        path: 'edit-address',
        loadChildren: () => import('../pages/edit-address/edit-address.module').then(m => m.EditAddressPageModule)
      },
      {
        path: 'thankyou-page',
        loadChildren: () => import('../pages/thankyou-page/thankyou-page.module').then(m => m.ThankyouPagePageModule)
      },

      {
        path: 'all-products',
        loadChildren: () => import('../pages/all-products/all-products.module').then(m => m.AllProductsPageModule)
      },
      {
        path: 'terms-and-conditions',
        loadChildren: () => import('../pages/terms-and-conditions/terms-and-conditions.module').then(m => m.TermsAndConditionsPageModule)
      },
      {
        path: 'privacy-policy',
        loadChildren: () => import('../pages/privacy-policy/privacy-policy.module').then(m => m.PrivacyPolicyPageModule)
      },
      {
        path: 'faq',
        loadChildren: () => import('../pages/faq/faq.module').then(m => m.FaqPageModule)
      },
      {
        path: 'about-us',
        loadChildren: () => import('../pages/about-us/about-us.module').then(m => m.AboutUsPageModule)
      },
      {
        path: 'write-review',
        loadChildren: () => import('../pages/write-review/write-review.module').then(m => m.WriteReviewPageModule)
      },

      {
        path: 'view-invoice',
        loadChildren: () => import('../pages/view-invoice/view-invoice.module').then(m => m.ViewInvoicePageModule)
      },
      {
        path: 'addtocart-popup',
        loadChildren: () => import('../pages/addtocart-popup/addtocart-popup.module').then(m => m.AddtocartPopupPageModule)
      },
      {
        path: 'select-customer',
        loadChildren: () => import('../pages/select-customer/select-customer.module').then(m => m.SelectCustomerPageModule)
      },
      {
        path: 'edit-profile',
        loadChildren: () => import('../pages/edit-profile/edit-profile.module').then(m => m.EditProfilePageModule)
      },
      {
        path: 'manage-address',
        loadChildren: () => import('../pages/manage-address/manage-address.module').then(m => m.ManageAddressPageModule)
      }
      ,
      {
        path: 'payment',
        loadChildren: () => import('../pages/payment/payment.module').then(m => m.PaymentPageModule)
      },
      {
        path: 'coupon',
        loadChildren: () => import('../pages/coupon/coupon.module').then(m => m.CouponPageModule)
      },
      {
        path: 'category-product',
        loadChildren: () => import('../pages/category-product/category-product.module').then( m => m.CategoryProductPageModule)
      }
    ]
  }];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRouter { }

