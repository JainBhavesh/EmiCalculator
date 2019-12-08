import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmiCalculationPageRoutingModule } from './emi-calculation-routing.module';

import { EmiCalculationPage } from './emi-calculation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmiCalculationPageRoutingModule
  ],
  declarations: [EmiCalculationPage]
})
export class EmiCalculationPageModule {}
