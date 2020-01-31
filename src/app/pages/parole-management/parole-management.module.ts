import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParoleManagementComponent } from './parole-management.component';
import { FormsModule } from '@angular/forms';
import { ParoleManagementRoutingModule } from "./parole-management-routing.module";

@NgModule({
  declarations: [ParoleManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    ParoleManagementRoutingModule
  ]
})
export class ParoleManagementModule { }
