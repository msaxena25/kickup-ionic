import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule) },
  { path: 'jobs', loadChildren: () => import('./components/job-list/job-list.module').then(m => m.JobListModule) },
  { path: 'search-provider', loadChildren: () => import('./components/search-provider/search-provider.module').then(m => m.SearchProviderModule) },
  { path: 'customer', loadChildren: () => import('./components/home/home.module').then(m => m.HomeModule) }
 ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
