import { Component, OnInit } from '@angular/core';
import { Transfer } from '../../models/Transfer';
import { PrisonerService } from '../../services/prisoner.service';

@Component({
  selector: 'app-prisoner-transfer',
  templateUrl: './prisoner-transfer.component.html',
  styleUrls: ['./prisoner-transfer.component.sass']
})
export class PrisonerTransferComponent implements OnInit {

  newTransfer: Transfer = new Transfer();

  fromPrisonTransSelected: string;

  toPrisonTransSelected: string;

  reasonSelected: string;

  releasingOfficerSelected: string;

  receivingOfficerSelected: string;

  constructor(private prisonerService: PrisonerService) { }

  ngOnInit() {
  }

  fromPrisonSelected(event){
    this.fromPrisonTransSelected = event;
  }

  toPrisonSelected(event){
    this.toPrisonTransSelected = event;
  }

  transferReasonSelected(event){
    this.reasonSelected = event;
  }

  selectReleasingOfficer(event){
    this.releasingOfficerSelected = event;
  }

  selectReceivingOfficer(event){
    this.receivingOfficerSelected = event;
  }

  captureTransfer(){
    const addTransfer = {
      nationalID: this.newTransfer.nationalID,
      fromPrison: this.newTransfer.fromPrison,
      toPrison: this.newTransfer.toPrison,
      releasingOfficer: this.newTransfer.releasingOfficer,
      receivingOfficer: this.newTransfer.receivingOfficer,
      transferDate: this.newTransfer.transferDate,
      arrivalDate: this.newTransfer.arrivalDate,
      transferReason: this.newTransfer.transferReason,
      prisonerName: this.newTransfer.prisonerName
    }
    this.prisonerService.addNewTransfer(addTransfer);
  }
}
