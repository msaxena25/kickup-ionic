import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListComponent } from './job-list.component';
import { IonicModule } from '@ionic/angular';
import { JobListRoutingModule } from './job-list.routing.module';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/shared/filter.pipe';



@NgModule({
  declarations: [JobListComponent, FilterPipe],
  imports: [
    CommonModule,
    IonicModule,
    JobListRoutingModule,
    FormsModule
  ]
})
export class JobListModule { }
