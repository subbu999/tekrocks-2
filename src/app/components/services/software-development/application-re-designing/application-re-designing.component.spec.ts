import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationReDesigningComponent } from './application-re-designing.component';

describe('ApplicationReDesigningComponent', () => {
  let component: ApplicationReDesigningComponent;
  let fixture: ComponentFixture<ApplicationReDesigningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationReDesigningComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationReDesigningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
