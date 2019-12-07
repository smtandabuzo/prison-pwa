import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrisonerTransferComponent } from './prisoner-transfer.component';

const routes: Routes = [{path: '', component: PrisonerTransferComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrisonerTransferRoutingModule { }
