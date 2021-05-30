import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatesticalDashboardComponent } from './statestical-dashboard.component';

describe('StatesticalDashboardComponent', () => {
  let component: StatesticalDashboardComponent;
  let fixture: ComponentFixture<StatesticalDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatesticalDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatesticalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
