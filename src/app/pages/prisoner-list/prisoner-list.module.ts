import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { PrisonerListRoutingModule } from './prisoner-list-routing.module';
import { PrisonerListComponent } from './prisoner-list.component';

@NgModule({
  declarations: [PrisonerListComponent],
  imports: [
    CommonModule,
    PrisonerListRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule, 
    MatRippleModule
  ]
})
export class PrisonerListModule { }
