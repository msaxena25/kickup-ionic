import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { RequestStatusPipe } from './shared/pipes/request-status.pipe';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './shared/pipes/filter.pipe';
import { NoValuePipe } from './shared/pipes/no-value.pipe';

@NgModule({
  declarations: [HomeComponent, RequestStatusPipe, FilterPipe, NoValuePipe],
  imports: [
    IonicModule,
    FormsModule
  ],
  providers: [
  ],
  exports: [HomeComponent, RequestStatusPipe, FormsModule, IonicModule, FilterPipe, NoValuePipe]
})
export class SharedModule { }
