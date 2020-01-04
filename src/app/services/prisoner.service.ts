import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../settings/appsettings';

@Injectable({
  providedIn: 'root'
})
export class PrisonerService {

  APP_SETTINGS: AppSettings = new AppSettings();

  public prisonerData: any;

  constructor(private http: HttpClient) { }

  getPrisonerList(): any {
    this.http.get(this.APP_SETTINGS.prisonerListURL).subscribe((responseData =>{
        console.log('Response data ' + JSON.stringify(responseData));
        return responseData;
    }));
  }

  addNewPrisoner(prisoner){
    this.http.post(this.APP_SETTINGS.prisonerListURL, prisoner).subscribe((responseData =>{
       console.log('Response data ' + JSON.stringify(responseData));
    }))
  }
}
