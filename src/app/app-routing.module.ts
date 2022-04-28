import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { AuthGuardService } from './@core/services/auth-guard-service.guard';
import { ExitGuardService } from './@core/services/exit-guard-service.guard';
import { LoginComponent } from './@shared/components/login/login.component';
import { RegisterComponent } from './@shared/components/register/register.component';

const routes: Routes = [
  {
    path: 'font',
    loadChildren: () => import('./font/font.module').then(m => m.FontModule),
  },
  {
    path: 'pages',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin/login',
    component: LoginComponent,
  },
  {
    path: 'admin/register',
    component: RegisterComponent,
  },
  {
    path: '',
    redirectTo: 'font',
    pathMatch: 'full',
  },
  {
    path: 'exit',
    canActivate: [ExitGuardService],
    loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)
  },
  {
    path: '**',
    redirectTo: 'font',
  },
];

const config: ExtraOptions = {
  useHash: false,
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
