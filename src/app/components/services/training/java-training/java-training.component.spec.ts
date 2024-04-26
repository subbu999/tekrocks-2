import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JavaTrainingComponent } from './java-training.component';

describe('JavaTrainingComponent', () => {
  let component: JavaTrainingComponent;
  let fixture: ComponentFixture<JavaTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JavaTrainingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JavaTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
