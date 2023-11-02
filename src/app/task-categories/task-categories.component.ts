import { Component } from '@angular/core';
import { CategoryDto } from 'src/task-api/models/category-dto';
import { CategoryServiceService } from '../services/category-service.service';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-categories',
  templateUrl: './task-categories.component.html',
  styleUrls: ['./task-categories.component.scss']
})
export class TaskCategoriesComponent {
  public categories: any;

  constructor(
    public categoryService: CategoryServiceService,
    public userService: UserServiceService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.categories = this.categoryService.getUserCategories();
    this.categoryService.onUserCategoriesUpdate.subscribe(_ => {
      this.categories = this.categoryService.getUserCategories();
    });
  }

  editCategory(id: number) {
    this.router.navigate(['categories', 'new', id]);
  }
}
