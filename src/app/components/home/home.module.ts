import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { IonicModule } from '@ionic/angular';
import { HomeComponent } from './home.component';
import { OrderComponent } from '../customer/order/order.component';
import { RequestStatusPipe } from 'src/app/shared/request-status.pipe';
import { CustomerProfileComponent } from '../customer/customer-profile/customer-profile.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, OrderComponent, RequestStatusPipe, CustomerProfileComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonicModule,
    FormsModule
  ]
})
export class HomeModule { }
