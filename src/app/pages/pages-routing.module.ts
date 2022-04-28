import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      { path: 'car', loadChildren: () => import('./car-manage/car-manage.module').then(m => m.CarManageModule) },
      { path: 'user', loadChildren: () => import('./user-manage/user-manage.module').then(m => m.UserManageModule) },
      { path: 'welcome', loadChildren: () => import('./welcome/welcome.module').then(m => m.WelcomeModule) },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule {}
