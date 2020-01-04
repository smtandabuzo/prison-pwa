import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule, MatInputModule, MatButtonModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { PrisonerTransferRoutingModule } from './prisoner-transfer-routing.module';
import { PrisonerTransferComponent } from './prisoner-transfer.component';

@NgModule({
  declarations: [PrisonerTransferComponent],
  imports: [
    CommonModule,
    PrisonerTransferRoutingModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule
  ]
})
export class PrisonerTransferModule { }
