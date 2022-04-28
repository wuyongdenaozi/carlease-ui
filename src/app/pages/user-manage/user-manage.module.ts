import { NgModule } from '@angular/core';

import { UserManageRoutingModule } from './user-manage-routing.module';
import { UserManageComponent } from './user-manage.component';
import { SharedModule } from 'src/app/@shared/shared.module';
import { QueryComponent } from './query/query.component';
import { DataTableModule } from 'ng-devui';
import { LogComponent } from './log/log.component';


@NgModule({
  declarations: [
    UserManageComponent,
    QueryComponent,
    LogComponent
  ],
  imports: [
    SharedModule,
    DataTableModule,
    UserManageRoutingModule
  ]
})
export class UserManageModule { }
