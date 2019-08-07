import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCandidateDetailsComponent } from './add-candidate-details.component';

describe('AddCandidateDetailsComponent', () => {
  let component: AddCandidateDetailsComponent;
  let fixture: ComponentFixture<AddCandidateDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCandidateDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCandidateDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
