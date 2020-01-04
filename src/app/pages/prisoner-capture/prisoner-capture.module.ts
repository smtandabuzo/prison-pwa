import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { PrisonerListRoutingModule } from './prisoner-capture-routing.module';
import { PrisonerListComponent } from './prisoner-capture.component';
import { FormsModule } from '@angular/forms';

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
    MatRippleModule,
    FormsModule
  ]
})
export class PrisonerListModule { }
