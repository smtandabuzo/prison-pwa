import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CorrectionalProgramComponent } from './correctional-program.component';
import { CorrectionalProgramRoutingModule } from "./correctional-program-routing.module";
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CorrectionalProgramComponent],
  imports: [
    CommonModule,
    CorrectionalProgramRoutingModule,
    FormsModule
  ]
})
export class CorrectionalProgramModule { }
