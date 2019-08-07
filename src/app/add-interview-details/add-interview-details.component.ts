import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-add-interview-details',
  templateUrl: './add-interview-details.component.html',
  styleUrls: ['./add-interview-details.component.css']
})
export class AddInterviewDetailsComponent implements OnInit {

  interviewDetails = new FormGroup({
    date: new FormControl(''),
    mode: new FormControl(''),
    intName: new FormControl(''),
    intEid: new FormControl(''),
    intRole: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

}
