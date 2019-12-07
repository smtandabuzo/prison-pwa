import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CourtCasesRoutingModule } from './court-cases-routing.module';
import { CourtCasesComponent } from './court-cases.component';

@NgModule({
  declarations: [CourtCasesComponent],
  imports: [
    CommonModule,
    CourtCasesRoutingModule
  ]
})
export class CourtCasesModule { }
