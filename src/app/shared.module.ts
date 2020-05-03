import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { RequestStatusPipe } from './shared/request-status.pipe';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, RequestStatusPipe],
  imports: [
    IonicModule,
    FormsModule
  ],
  providers: [
  ],
  exports: [HomeComponent, RequestStatusPipe, FormsModule, IonicModule]
})
export class SharedModule { }
