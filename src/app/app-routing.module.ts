import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'jobs', loadChildren: () => import('./components/job-list/job-list.module').then(m => m.JobListModule) },
  { path: 'search-provider', loadChildren: () => import('./components/search-provider/search-provider.module').then(m => m.SearchProviderModule) },
  { path: 'provider', loadChildren: () => import('./components/job-provider/job-provider.module').then(m => m.JobProviderModule) },
  { path: 'customer', loadChildren: () => import('./components/customer/customer.module').then(m => m.CustomerModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
