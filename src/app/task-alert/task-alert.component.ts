import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-task-alert',
  templateUrl: './task-alert.component.html',
  styleUrls: ['./task-alert.component.scss']
})
export class TaskAlertComponent {
  @Input() content: string[] = [];
  @Input() alertType = 'error';
}
