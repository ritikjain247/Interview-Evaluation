import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './add/add.component';
import { ShowCandidateComponent } from './show-candidate/show-candidate.component';
import { InterviewEvaluationComponent } from './interview-evaluation/interview-evaluation.component';


const routes: Routes = [
  {path: 'add-candidate', component: AddComponent},
  {path: 'show-candidate', component: ShowCandidateComponent},
  {path: 'take-interview:level', component: InterviewEvaluationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
