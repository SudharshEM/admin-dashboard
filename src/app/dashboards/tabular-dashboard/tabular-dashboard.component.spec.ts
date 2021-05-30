import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabularDashboardComponent } from './tabular-dashboard.component';

describe('TabularDashboardComponent', () => {
  let component: TabularDashboardComponent;
  let fixture: ComponentFixture<TabularDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabularDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabularDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
