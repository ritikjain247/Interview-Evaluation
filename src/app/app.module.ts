import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { AddComponent } from './add/add.component';
import { InterviewDetailsComponent } from './interview-details/interview-details.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { AddCandidateDetailsComponent } from './add-candidate-details/add-candidate-details.component';
import { AddInterviewDetailsComponent } from './add-interview-details/add-interview-details.component';
import { ShowCandidateComponent } from './show-candidate/show-candidate.component';
import { InterviewEvaluationComponent } from './interview-evaluation/interview-evaluation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TechnicalAssessmentComponent } from './technical-assessment/technical-assessment.component';
import { AdditionalCommentsComponent } from './additional-comments/additional-comments.component';
import { PanelRecommendationsComponent } from './panel-recommendations/panel-recommendations.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HrAssessmentComponent } from './hr-assessment/hr-assessment.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    AddComponent,
    InterviewDetailsComponent,
    CandidateDetailsComponent,
    AddCandidateDetailsComponent,
    AddInterviewDetailsComponent,
    ShowCandidateComponent,
    InterviewEvaluationComponent,
    TechnicalAssessmentComponent,
    AdditionalCommentsComponent,
    PanelRecommendationsComponent,
    HrAssessmentComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,    
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
