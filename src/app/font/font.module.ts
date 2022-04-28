import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontComponent } from './font.component';
import { FontRoutingModule } from './font-routing.module';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../@shared/shared.module';
import { RegisterComponent } from './register/register.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { CarBuyComponent } from './car-buy/car-buy.component';
import { TopComponent } from './top/top.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    FontComponent,
    LoginComponent,
    RegisterComponent,
    CarInfoComponent,
    CarBuyComponent,
    TopComponent,
    HomeComponent,
  ],
  imports: [
    FontRoutingModule,
    SharedModule,
    CommonModule
  ]
})
export class FontModule { }
