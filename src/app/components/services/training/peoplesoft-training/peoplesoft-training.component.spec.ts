import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeoplesoftTrainingComponent } from './peoplesoft-training.component';

describe('PeoplesoftTrainingComponent', () => {
  let component: PeoplesoftTrainingComponent;
  let fixture: ComponentFixture<PeoplesoftTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeoplesoftTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeoplesoftTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
