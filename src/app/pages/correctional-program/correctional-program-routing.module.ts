import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorrectionalProgramComponent } from "./correctional-program.component";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [{path: '', component: CorrectionalProgramComponent}];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrectionalProgramRoutingModule { }
