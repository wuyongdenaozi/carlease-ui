import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserHomeComponent } from './user-home/user-home.component';
import { UserManageRoutingModule } from './user-manage-routing.module';
import { SharedModule } from 'src/app/@shared/shared.module';
import { TopNavbarComponent } from './top-navbar/top-navbar.component';
import { LeftNavbarComponent } from './left-navbar/left-navbar.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { UserCarComponent } from './user-car/user-car.component';
import { UserOrderComponent } from './user-order/user-order.component';
import { AddCarComponent } from './add-car/add-car.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateCarComponent } from './update-car/update-car.component';

@NgModule({
  declarations: [
    UserHomeComponent,
    TopNavbarComponent,
    LeftNavbarComponent,
    UserInfoComponent,
    UserCarComponent,
    UserOrderComponent,
    AddCarComponent,
    UpdateCarComponent,
  ],
  imports: [
    UserManageRoutingModule,
    HttpClientModule,
    SharedModule,
    CommonModule
  ]
})
export class UserManageModule { }
