import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchProviderComponent } from './search-provider.component';


const routes: Routes = [
  {
    path: '',
    component: SearchProviderComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SearchProviderRoutingModule { }
