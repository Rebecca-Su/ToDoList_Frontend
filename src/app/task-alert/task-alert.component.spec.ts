import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskAlertComponent } from './task-alert.component';

describe('TaskAlertComponent', () => {
  let component: TaskAlertComponent;
  let fixture: ComponentFixture<TaskAlertComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaskAlertComponent]
    });
    fixture = TestBed.createComponent(TaskAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
