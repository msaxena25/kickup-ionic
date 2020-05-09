import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared.module';

import { JobListComponent } from './job-list.component';
import { JobListRoutingModule } from './job-list.routing.module';



@NgModule({
  declarations: [JobListComponent],
  imports: [
    CommonModule,
    JobListRoutingModule,
    SharedModule
  ]
})
export class JobListModule { }
