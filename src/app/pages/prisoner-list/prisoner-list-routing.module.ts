import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrisonerListComponent } from './prisoner-list.component';

const routes: Routes = [{path: '', component: PrisonerListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrisonerListRoutingModule { }
