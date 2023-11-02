import { Component } from '@angular/core';
import { CategoryDto } from 'src/task-api/models/category-dto';
import { UserServiceService } from '../services/user-service.service';
import { CategoryServiceService } from '../services/category-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {
  public categories: CategoryDto[] = [];

  constructor(
    public categoryService: CategoryServiceService,
    public userService: UserServiceService
  ) { }

  ngOnInit() {
    this.categoryService.getAllByUser(this.userService.getLoggedUser()!.id!);

    this.categoryService.onUserCategoriesUpdate.subscribe(_ => {
      this.categories = this.categoryService.getUserCategories()
    });
  }
}
