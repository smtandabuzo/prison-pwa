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

  addNewCourt(){
    const addCourt = {
      courtDate: this.newCourt.courtDate,
      courtName: this.newCourt.courtName,
      presidingJudge: this.newCourt.presidingJudge,
      attorney: this.newCourt.attorney
    }
    this.prisonerService.addNewCourt(addCourt);
  }

  addNewCase(){
    const addCase = {
      caseNumber: this.newCase.caseNumber,
      offence: this.newCase.offence,
      prisonerName: this.newCase.prisonerName,
      caseOutcome: this.newCase.caseOutcome
    }
    this.prisonerService.addNewCase(addCase);
  }

}
