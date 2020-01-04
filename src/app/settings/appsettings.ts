export class AppSettings {
    public prisonerListURL: string;
    public transferListURL: string;
    public courtListURL: string;
    public caseListURL: string;

    constructor(){
        this.prisonerListURL = '/prison-backend/prisoners'
        this.transferListURL = '/prison-backend/transfer'
        this.courtListURL = '/prison-backend/court'
        this.caseListURL = '/prison-backend/case'
    }
}