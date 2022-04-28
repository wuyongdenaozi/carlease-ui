import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogComponent } from './log/log.component';
import { QueryComponent } from './query/query.component';
import { UserManageComponent } from './user-manage.component';

const routes: Routes = [
  { 
    path: '', 
    component: UserManageComponent,
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
        path: 'log',
        component: LogComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManageRoutingModule { }
