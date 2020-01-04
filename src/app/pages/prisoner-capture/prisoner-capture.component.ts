import { Component, OnInit } from '@angular/core';
import { PrisonerService } from '../../services/prisoner.service';
import { FormControl } from '@angular/forms';
import { Prisoner } from '../../models/Prisoner';

@Component({
  selector: 'app-prisoner-list',
  templateUrl: './prisoner-capture.component.html',
  styleUrls: ['./prisoner-capture.component.scss']
})
export class PrisonerListComponent implements OnInit {
  
  selectPrison: FormControl;

  educationLevelSelected: string;

  prisonSelected: string;

  newPrisoner: Prisoner = new Prisoner();

  public prisonerList: any;
  constructor(private prisonerService: PrisonerService) { }

  ngOnInit() {
    this.prisonerList = this.prisonerService.getPrisonerList();
  }

  addNewPrisoner(newPrisoner: Prisoner){
    const addPrisoner = {
      firstname: newPrisoner.firstname,
      lastname: newPrisoner.lastname,
      dateOfBirth: newPrisoner.dateOfBirth,
      nationalID: newPrisoner.nationalID,
      education: newPrisoner.education,
      address: {
        "streetnumber": newPrisoner.streetnumber,
        "streetname": newPrisoner.streetname,
        "suburb": newPrisoner.suburb,
        "city": newPrisoner.city,
        "postalcode": newPrisoner.postalcode
      },
      prison: newPrisoner.prison,
      location: newPrisoner.location,
      offence: newPrisoner.offence,
      fileNumber: newPrisoner.fileNumber,
      status: newPrisoner.status
    }

    this.prisonerService.addNewPrisoner(addPrisoner);
  }

  educationSelected(event){
    this.educationLevelSelected = event;
  }

  prisonHeldSelected(event){
    this.prisonSelected = event;
  }

}
