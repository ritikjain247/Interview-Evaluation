import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-technical-assessment',
  templateUrl: './technical-assessment.component.html',
  styleUrls: ['./technical-assessment.component.css']
})
export class TechnicalAssessmentComponent implements OnInit {
  technicalAssessment = new FormGroup({
    specialisationName: new FormControl(''),
    specialisationRating: new FormControl(''),
    specialisationRemarks: new FormControl(''),
  });
  public level = 1;
  specialisations = [{}];
  l2specialisationNames = ['Academic Background', 'Interpersonal Skills', 'Analytical Skills', 'Functional/Technical Skills', 'Leadership Skills', 'Personal Motivation, Self-COnfidence and Adaptability', 'Communication Skills', 'Attitude and Presentability', 'Presentation SKills', 'Overall Rating'];
  constructor() { }
  ngOnInit() {
  }

  addSpecialisation() {
    this.specialisations.push({});
  }

}
