import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Shared/Components/error/error.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./Dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'services',
    loadChildren: () => import('./Services/services.module').then((m) => m.ServicesModule)
  },
  {
    path: '**',
    component: ErrorComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GrowtreeGlobalServicesRoutingModule { }
