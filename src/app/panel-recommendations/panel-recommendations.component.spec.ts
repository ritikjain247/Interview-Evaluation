import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PanelRecommendationsComponent } from './panel-recommendations.component';

describe('PanelRecommendationsComponent', () => {
  let component: PanelRecommendationsComponent;
  let fixture: ComponentFixture<PanelRecommendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PanelRecommendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PanelRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
