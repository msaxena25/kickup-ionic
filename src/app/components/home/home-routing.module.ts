import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { OrderComponent } from '../customer/order/order.component';
import { JobListComponent } from '../job-list/job-list.component';
import { JobListModule } from '../job-list/job-list.module';
import { CustomerProfileComponent } from '../customer/customer-profile/customer-profile.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'job',
        loadChildren: () => import('./../job-list/job-list.module').then(m => m.JobListModule)
      },
      {
        path: 'order',
        component: OrderComponent
      },
      {
        path: 'profile',
        component: CustomerProfileComponent
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
