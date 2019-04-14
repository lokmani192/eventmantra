import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanningToolsComponent } from './planning-tools.component';

describe('PlanningToolsComponent', () => {
  let component: PlanningToolsComponent;
  let fixture: ComponentFixture<PlanningToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanningToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanningToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
