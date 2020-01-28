import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../settings/appsettings';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PrisonerService {

  APP_SETTINGS: AppSettings = new AppSettings();

  public prisonerData: any;

  constructor(private http: HttpClient) { }

  getPrisonerList(): any {
    this.http.get(environment.prodUrl + this.APP_SETTINGS.prisonerListURL).subscribe((responseData =>{
        console.log('get Prisoner List - Response data ' + JSON.stringify(responseData));
        return responseData;
    }));
  }

  addNewPrisoner(prisoner){
    this.http.post(environment.prodUrl + this.APP_SETTINGS.prisonerListURL, prisoner).subscribe((responseData =>{
       console.log('Add Prisoner - Response data ' + JSON.stringify(responseData));
    }))
  }

  addNewTransfer(transfer){
    this.http.post(environment.prodUrl + this.APP_SETTINGS.transferListURL, transfer).subscribe((responseData =>{
      console.log('Add New Transfer - Response data ' + JSON.stringify(responseData));
    }))
  }

  addNewCourt(court){
    this.http.post(environment.prodUrl + this.APP_SETTINGS.courtListURL, court).subscribe((responseData =>{
      console.log('Add New Court - Response data ' + JSON.stringify(responseData));
    }))
  }

  addNewCase(newCase){
    this.http.post(environment.prodUrl + this.APP_SETTINGS.caseListURL, newCase).subscribe((responseData =>{
      console.log('Add New Case - Response data ' + JSON.stringify(responseData));
    }))
  }
}
