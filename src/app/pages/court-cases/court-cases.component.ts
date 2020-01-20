import { Component, OnInit } from '@angular/core';
import { Case } from '../../models/Case';
import { Court } from '../../models/Court';
import { PrisonerService } from '../../services/prisoner.service';

@Component({
  selector: 'app-court-cases',
  templateUrl: './court-cases.component.html',
  styleUrls: ['./court-cases.component.scss']
})
export class CourtCasesComponent implements OnInit {

  newCourt: Court = new Court();

  newCase: Case = new Case();

  courtNameSelected: string;

  judgeSelected: string;

  offenceSelected: string;

  caseOutcomeSelected: string;

  constructor(private prisonerService: PrisonerService) { }

  ngOnInit() {
  }

  selectCourtName(event){
   this.courtNameSelected = event;
  }

  selectJudge(event){
   this.judgeSelected = event;
  }

  selectOffence(event){
   this.offenceSelected = event;
  }

  selectCaseOutcome(event){
    this.caseOutcomeSelected = event;
  }

  addNewCourt(newCourt){
    const addCourt = {
      courtDate: newCourt.courtDate,
      courtName: newCourt.courtName,
      presidingJudge: newCourt.presidingJudge,
      attorney: newCourt.attorney
    }
    this.prisonerService.addNewCourt(addCourt);
  }

  addNewCase(newCase){
    const addCase = {
      caseNumber: newCase.caseNumber,
      offence: newCase.offence,
      prisonerName: newCase.prisonerName,
      caseOutcome: newCase.caseOutcome
    }
    this.prisonerService.addNewCase(addCase);
  }

}
