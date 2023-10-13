import { Component } from '@angular/core';
import { TaskDto } from 'src/task-api/models/task-dto';
import { CategoryServiceService } from '../services/category-service.service';
import { TaskServiceService } from '../services/task-service.service';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { CategoryDto } from 'src/task-api/models/category-dto';

@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.scss']
})
export class CreateTasksComponent {
  public errors: string[] = [];
  public taskDto: TaskDto = {
    category: { id: 0}
  };

  public categories: CategoryDto[] = [];

  constructor(
    public categoryService: CategoryServiceService,
    public taskService: TaskServiceService,
    public userService: UserServiceService,
    public router: Router,
  ) {
  }

  ngOnInit() {
    this.categories = this.categoryService.getUserCategories();

    this.categoryService.onUserCategoriesUpdate.subscribe(_ => {
      this.categories = this.categoryService.getUserCategories()
    });
  }

  saveTask() {
    this.errors = [];
    this.taskDto.category!.user = this.userService.getLoggedUser()!;
    this.taskService.save(this.taskDto)
    .subscribe(_ => {
      this.router.navigate(['task-list']);
    });
  }

  cancel() {
    this.router.navigate(['task-list']);
  }
}
