import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourtCasesComponent } from './court-cases.component';

const routes: Routes = [{path: '', component: CourtCasesComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourtCasesRoutingModule { }
