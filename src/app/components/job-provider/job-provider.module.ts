import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

import { JobProviderRoutingModule } from './job-provider-routing.module';
import { ProviderOrdersComponent } from './provider-orders/provider-orders.component';
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';
import { ProviderJobsComponent } from './provider-jobs/provider-jobs.component';
import { AddJobComponent } from './add-job/add-job.component';


@NgModule({
  declarations: [ProviderProfileComponent, ProviderOrdersComponent, 
    ProviderJobsComponent, AddJobComponent],
  imports: [
    CommonModule,
    JobProviderRoutingModule,
    SharedModule
  ],
  entryComponents: [AddJobComponent]
})
export class JobProviderModule { }
