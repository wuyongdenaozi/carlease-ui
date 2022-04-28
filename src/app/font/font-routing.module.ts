import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { FontComponent } from './font.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: FontComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'user',
    loadChildren: () => import('./user-manage/user-manage.module').then(m => m.UserManageModule)
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'info/:id',
    component: CarInfoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FontRoutingModule {}
