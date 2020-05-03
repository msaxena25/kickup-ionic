import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [CustomerProfileComponent, OrderComponent],
  imports: [
    CommonModule, 
    CustomerRoutingModule, 
    SharedModule
  ]
})
export class CustomerModule { }
