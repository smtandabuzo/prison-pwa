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

  public transferList: any;

  constructor(private prisonerService: PrisonerService) { }

  ngOnInit() {
    this.transferList = this.prisonerService.getTransferList();
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

  captureTransfer(newTransfer){
    const addTransfer = {
      nationalID: newTransfer.nationalID,
      fromPrison: newTransfer.fromPrison,
      toPrison: newTransfer.toPrison,
      releasingOfficer: newTransfer.releasingOfficer,
      receivingOfficer: newTransfer.receivingOfficer,
      transferDate: newTransfer.transferDate,
      arrivalDate: newTransfer.arrivalDate,
      transferReason: newTransfer.transferReason,
      prisonerName: newTransfer.prisonerName
    }
    this.prisonerService.addNewTransfer(addTransfer);
  }
}
