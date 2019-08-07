import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-candidate-details',
  templateUrl: './add-candidate-details.component.html',
  styleUrls: ['./add-candidate-details.component.css']
})
export class AddCandidateDetailsComponent implements OnInit {

  candidateDetails = new FormGroup({
    name: new FormControl(''),
    skills: new FormControl(''),
    reqid: new FormControl(''),
    experience: new FormControl(''),    
  });
  constructor() { }

  ngOnInit() {
  }

}
