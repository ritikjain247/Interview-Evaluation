import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-panel-recommendations',
  templateUrl: './panel-recommendations.component.html',
  styleUrls: ['./panel-recommendations.component.css']
})
export class PanelRecommendationsComponent implements OnInit {
  panelRecommendation = new FormGroup({
    recommendation: new FormControl(''),
    recommendationLevel: new FormControl(''),
    recommendationNumber: new FormControl(''),
  });
  constructor() { }

  ngOnInit() {
  }

}
