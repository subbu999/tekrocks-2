import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffshoreStaffingComponent } from './offshore-staffing.component';

describe('OffshoreStaffingComponent', () => {
  let component: OffshoreStaffingComponent;
  let fixture: ComponentFixture<OffshoreStaffingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffshoreStaffingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffshoreStaffingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
