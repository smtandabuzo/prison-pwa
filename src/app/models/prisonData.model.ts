export class PrisonDataModel{
  public prisonSubHeading: any[];
  public prisonIcons: any[];
  constructor(){
    this.prisonSubHeading = [
      {
      id: '01',
        value: 'Find Prisoner'
    },{
      id: '02',
        value: 'Approval'
    },{
      id: '03',
        value: 'Review Rules'
    },{
      id: '04',
        value: 'Plan Visit'
    }
    ];
    this.prisonIcons = [
      {
        iconName: 'Search',
        iconImage: 'assets/images/search.svg',
        iconParent: 'Find Prisoner',
        id: 'FindPris01'
      },
      {
        iconName: 'Check Mark',
        iconImage: 'assets/images/check-mark.svg',
        iconParent: 'Approval',
        id: 'Approval01'
      },
      {
        iconName: 'Planning',
        iconImage: 'assets/images/planning.svg',
        iconParent: 'Review Rules',
        id: 'Review01'
      },
      {
        iconName: 'Speed',
        iconImage: 'assets/images/speed.svg',
        iconParent: 'Plan Visit',
        id: 'Plan01'
      }
    ];
  }
}
