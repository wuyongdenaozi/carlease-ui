import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarManageComponent } from './car-manage.component';
import { OrderComponent } from './order/order.component';
import { QueryComponent } from './query/query.component';
import { TypeComponent } from './type/type.component';

const routes: Routes = [
  { 
    path: '', 
    component: CarManageComponent,
    children: [
      {
        path: '',
        redirectTo: 'query',
        pathMatch: 'full'
      },
      {
        path: 'query',
        component: QueryComponent
      },
      {
        path: 'type',
        component: TypeComponent
      },
      {
        path: 'order',
        component: OrderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarManageRoutingModule { }
