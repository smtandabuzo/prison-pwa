import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisitorInformationComponent } from "./visitor-information.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{path: '', component: VisitorInformationComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorInformationRoutingModule { }
