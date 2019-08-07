import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddInterviewDetailsComponent } from './add-interview-details.component';

describe('AddInterviewDetailsComponent', () => {
  let component: AddInterviewDetailsComponent;
  let fixture: ComponentFixture<AddInterviewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddInterviewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddInterviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
