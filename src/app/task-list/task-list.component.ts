import { Component } from '@angular/core';
import { CategoryDto } from 'src/task-api/models/category-dto';
import { UserServiceService } from '../services/user-service.service';
import { CategoryServiceService } from '../services/category-service.service';
import { TaskServiceService } from '../services/task-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  public categories: CategoryDto[] | null = null;
  public isToday: boolean = false;

  constructor(
    public categoryService: CategoryServiceService,
    public userService: UserServiceService,
    public taskService: TaskServiceService,
    public activatedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.resolveTimeParameters();

    //change it, tasks and tasks today should not be handled this way.
    this.categoryService.onUserCategoriesUpdateSuccess.subscribe(data => {
      this.categories = this.isToday ? this.categoryService.getUserCategoriesToday() : this.categoryService.getUserCategories();
    });
  }

  resolveTimeParameters() {
    const dateTime = this.activatedRouter.snapshot.params["start"];
    if (dateTime && dateTime === 'today') {
      this.isToday = true;
      this.categoryService.getAllForToday(this.userService.getLoggedUser()!.id!);
    } else {
      this.isToday = false;
      this.categoryService.getAllByUser(this.userService.getLoggedUser()!.id!);
    }
  }
}
