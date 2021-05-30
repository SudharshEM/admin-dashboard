import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadialBarDashboardComponent } from './radial-bar-dashboard.component';

describe('RadialBarDashboardComponent', () => {
  let component: RadialBarDashboardComponent;
  let fixture: ComponentFixture<RadialBarDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadialBarDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadialBarDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
