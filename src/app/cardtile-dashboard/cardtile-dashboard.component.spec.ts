import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardtileDashboardComponent } from './cardtile-dashboard.component';

describe('CardtileDashboardComponent', () => {
  let component: CardtileDashboardComponent;
  let fixture: ComponentFixture<CardtileDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardtileDashboardComponent]
    });
    fixture = TestBed.createComponent(CardtileDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  
});
