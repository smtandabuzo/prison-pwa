import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParoleManagementComponent } from './parole-management.component';

describe('ParoleManagementComponent', () => {
  let component: ParoleManagementComponent;
  let fixture: ComponentFixture<ParoleManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParoleManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParoleManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
