import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmiCalculationPage } from './emi-calculation.page';

const routes: Routes = [
  {
    path: '',
    component: EmiCalculationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmiCalculationPageRoutingModule {}
