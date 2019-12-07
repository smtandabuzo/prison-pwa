import { Component, OnInit } from '@angular/core';
import { PrisonerService } from '../../services/prisoner.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-prisoner-list',
  templateUrl: './prisoner-capture.component.html',
  styleUrls: ['./prisoner-capture.component.scss']
})
export class PrisonerListComponent implements OnInit {
  
  selectPrison: FormControl;

  public prisonerList: any;
  constructor(private prisonerService: PrisonerService) { }

  ngOnInit() {
    this.prisonerList = this.prisonerService.getPrisonerList();
  }

}
