import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParoleManagementComponent } from "./parole-management.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{path: '', component: ParoleManagementComponent}];

@NgModule({
  declarations: [],
  imports:
    [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class ParoleManagementRoutingModule { }
