import { Component } from '@angular/core';
import { CategoryDto } from 'src/task-api/models/category-dto';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  // public categories: CategoryDto[];

  constructor(
    public userService : UserServiceService,
  ) {}
}
