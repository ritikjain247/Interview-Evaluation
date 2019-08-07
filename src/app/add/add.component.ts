import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  add = new FormGroup({
    candidateDetails: new FormGroup({
      name: new FormControl(''),
      skills: new FormControl(''),
      reqid: new FormControl(''),
      expperience: new FormControl(''),
    }),
    interviewDetails: new FormGroup({
      date: new FormControl(''),
      mode: new FormControl(''),
      intName: new FormControl(''),
      intEid: new FormControl(''),
      intRole: new FormControl(''),
    }),
  });

  constructor() { }

  ngOnInit() {
  }

}
