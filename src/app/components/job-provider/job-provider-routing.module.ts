import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProviderProfileComponent } from './provider-profile/provider-profile.component';
import { ProviderOrdersComponent } from './provider-orders/provider-orders.component';
import { HomeComponent } from '../home/home.component';
import { ProviderJobsComponent } from './provider-jobs/provider-jobs.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'jobs',
        component: ProviderJobsComponent
      },
      {
        path: 'order',
        component: ProviderOrdersComponent
      },
      {
        path: 'profile',
        component: ProviderProfileComponent
      },
      {
        path: '',
        redirectTo: 'jobs',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobProviderRoutingModule { }
