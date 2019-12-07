import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonerListComponent } from './prisoner-list.component';

describe('PrisonerListComponent', () => {
  let component: PrisonerListComponent;
  let fixture: ComponentFixture<PrisonerListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisonerListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrisonerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
