import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractToHireStaffingComponent } from './contract-to-hire-staffing.component';

describe('ContractToHireStaffingComponent', () => {
  let component: ContractToHireStaffingComponent;
  let fixture: ComponentFixture<ContractToHireStaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContractToHireStaffingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContractToHireStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
