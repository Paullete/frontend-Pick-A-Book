import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { CartComponent } from './pages/cart/cart.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import {RegisterComponent } from './pages/register/register.component';
import {ProfileComponent } from './pages/profile/profile.component';
import {CategoriesComponent } from './pages/categories/categories.component';
import {PaymentComponent } from './pages/payment/payment.component';
import {HagglingComponent } from './pages/haggling/haggling.component';



const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'cart',component:CartComponent},
  {path:'add',component:AddbookComponent},
  {path:'contact',component:ContactComponent},
  {path: 'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path: 'profile',component:ProfileComponent},
  {path: 'categories',component:CategoriesComponent},
  {path: 'payment',component:PaymentComponent},
  {path: 'haggling',component:HagglingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
