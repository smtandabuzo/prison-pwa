import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { CourtCasesRoutingModule } from './court-cases-routing.module';
import { CourtCasesComponent } from './court-cases.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [CourtCasesComponent],
  imports: [
    CommonModule,
    CourtCasesRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule
  ]
})
export class CourtCasesModule { }
