import { Component } from '@angular/core';
import { CategoryDto } from 'src/task-api/models/category-dto';
import { CategoryServiceService } from '../services/category-service.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent {
  public errors = [];
  public categoryDto: CategoryDto = {};

  constructor(
    public categoryService: CategoryServiceService,
    public router: Router,
    public userService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.resolveCategoryDto();
  }

  resolveCategoryDto() {
    this.categoryService.getById(this.categoryDto!.id!)
    .subscribe(data => {
      this.categoryDto = data;
      error: this.router.navigate(['categories']);
    });
  }

  saveCategory() {
    this.errors = [];
    this.categoryDto.user = this.userService.getLoggedUser();
    this.categoryService.save(this.categoryDto)
    .subscribe(data => {
      this.router.navigate(['categories']);
      // error: this.errors = error.error.errors;
    });
  }

  cancel() {
    this.router.navigate(['categories']);
  }
}
