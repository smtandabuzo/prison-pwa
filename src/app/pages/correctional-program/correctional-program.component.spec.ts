import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionalProgramComponent } from './correctional-program.component';

describe('CorrectionalProgramComponent', () => {
  let component: CorrectionalProgramComponent;
  let fixture: ComponentFixture<CorrectionalProgramComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorrectionalProgramComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionalProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
