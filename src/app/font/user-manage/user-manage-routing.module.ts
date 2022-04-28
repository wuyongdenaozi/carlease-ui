import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { UserCarComponent } from "./user-car/user-car.component";
import { UserHomeComponent } from "./user-home/user-home.component";
import { UserInfoComponent } from "./user-info/user-info.component";
import { UserOrderComponent } from "./user-order/user-order.component";

const routes: Routes = [
  {
    path: '',
    component: UserHomeComponent,
    children: [
      {
        path: 'info',
        component: UserInfoComponent
      },
      {
        path: 'car',
        component: UserCarComponent
      },
      {
        path: 'order',
        component: UserOrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManageRoutingModule {};