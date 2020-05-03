import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../home/home.component';
import { CustomerProfileComponent } from './customer-profile/customer-profile.component';
import { OrderComponent } from './order/order.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'job',
        loadChildren: () => import('../job-list/job-list.module').then(m => m.JobListModule)
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'profile',
        component: CustomerProfileComponent
      },
      {
        path: '',
        redirectTo: 'job',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
