import { NgModule } from '@angular/core';

import { CarManageRoutingModule } from './car-manage-routing.module';
import { CarManageComponent } from './car-manage.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { QueryComponent } from './query/query.component';
import { OrderComponent } from './order/order.component';
import { TypeComponent } from './type/type.component';
import { DataTableModule } from 'ng-devui';
import { TypeAddComponent } from './type-add/type-add.component';


@NgModule({
  declarations: [
    CarManageComponent,
    QueryComponent,
    OrderComponent,
    TypeComponent,
    TypeAddComponent
  ],
  imports: [
    SharedModule,
    DataTableModule,
    CarManageRoutingModule
  ]
})
export class CarManageModule { }
