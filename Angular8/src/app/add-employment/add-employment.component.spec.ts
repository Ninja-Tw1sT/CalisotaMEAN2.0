import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEmploymentComponent } from './add-employment.component';

describe('AddEmploymentComponent', () => {
  let component: AddEmploymentComponent;
  let fixture: ComponentFixture<AddEmploymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEmploymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEmploymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
