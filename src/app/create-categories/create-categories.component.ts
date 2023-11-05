import { Component } from '@angular/core';
import { CategoryDto } from 'src/task-api/models/category-dto';
import { CategoryServiceService } from '../services/category-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-create-categories',
  templateUrl: './create-categories.component.html',
  styleUrls: ['./create-categories.component.scss']
})
export class CreateCategoriesComponent {
  public errors = [];
  public categoryDto: CategoryDto = {};
  public categoryId = null;

  constructor(
    public categoryService: CategoryServiceService,
    public router: Router,
    public userService: UserServiceService,
    public activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.categoryService.onGetCategory.subscribe(data => 
    {
      this.categoryDto = data;
    })

    this.categoryService.onUserCategoriesUpdateFail.subscribe(error => 
    {
      console.log(error);
      this.errors = error.error.errors ? error.error.errors : error.message;
    })

    this.categoryService.onUserCategoriesUpdateSuccess.subscribe(_ => 
    {
      this.router.navigate(['task-list']);
    })
    
    this.resolveCategoryDto();
  }

  resolveCategoryDto() {
    this.categoryId = this.activatedRoute.snapshot.params["categoryId"];
    //fetch from existing categories.
    if(this.categoryId) {
      this.categoryService.getById(this.categoryId);
    }
  }

  saveCategory() {
    this.errors = [];
    this.categoryDto.user = this.userService.getLoggedUser();
    this.categoryService.save(this.categoryDto);  
  }

  cancel() {
    this.router.navigate(['task-list']);
  }
}
