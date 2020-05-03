import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { SearchProviderRoutingModule } from './search-provider-routing.module';
import { SearchProviderComponent } from './search-provider.component';


@NgModule({
  declarations: [SearchProviderComponent],
  imports: [
    CommonModule,
    SearchProviderRoutingModule,
    IonicModule
  ],
  entryComponents: []
})
export class SearchProviderModule { }
