import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

import { JobProviderRoutingModule } from './job-provider-routing.module';
import { ProviderOrdersComponent } from './provider-orders/provider-orders.component';
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';


@NgModule({
  declarations: [ProviderProfileComponent, ProviderOrdersComponent],
  imports: [
    CommonModule,
    JobProviderRoutingModule,
    SharedModule
  ]
})
export class JobProviderModule { }
