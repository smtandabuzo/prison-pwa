import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { VisitorInformationRoutingModule } from "./visitor-information-routing.module";
import { VisitorInformationComponent } from "./visitor-information.component";

@NgModule({
  declarations: [VisitorInformationComponent],
  imports: [
    CommonModule,
    VisitorInformationRoutingModule,
    FormsModule
  ]
})
export class VisitorInformationModule { }
