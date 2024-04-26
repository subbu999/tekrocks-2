import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomizedWebComponent } from './customized-web.component';

describe('CustomizedWebComponent', () => {
  let component: CustomizedWebComponent;
  let fixture: ComponentFixture<CustomizedWebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomizedWebComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomizedWebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
