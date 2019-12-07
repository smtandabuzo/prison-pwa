import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PrisonerTransferRoutingModule } from './prisoner-transfer-routing.module';
import { PrisonerTransferComponent } from './prisoner-transfer.component';

@NgModule({
  declarations: [PrisonerTransferComponent],
  imports: [
    CommonModule,
    PrisonerTransferRoutingModule
  ]
})
export class PrisonerTransferModule { }
