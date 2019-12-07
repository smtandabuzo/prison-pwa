import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisonerTransferComponent } from './prisoner-transfer.component';

describe('PrisonerTransferComponent', () => {
  let component: PrisonerTransferComponent;
  let fixture: ComponentFixture<PrisonerTransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisonerTransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrisonerTransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
