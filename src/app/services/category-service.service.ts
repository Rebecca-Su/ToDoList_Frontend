import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CategoryDto } from "src/task-api/models/category-dto";
import { UserServiceService } from "./user-service.service";

@Injectable({
    providedIn: 'root'
  })
  export class CategoryServiceService {
    private userCategories: CategoryDto[] = [];
    public onUserCategoriesUpdateSuccess = new EventEmitter();
    public onGetCategory = new EventEmitter();
    public onUserCategoriesUpdateFail = new EventEmitter();

    constructor(
        public httpClient: HttpClient,
        public userService: UserServiceService
    ){}

    save(category: CategoryDto) {
      return this.httpClient.post('http://localhost:8080/api/v1/category/', category).subscribe({
        next: (data) => 
        {
          this.getAllByUser(this.userService.getLoggedUser()!.id!);
        },
        error: (error) => 
        {
          this.onUserCategoriesUpdateFail.emit(error);
        }
      });
    }

    getAllByUser(userId: number) {
      return this.httpClient.get<CategoryDto[]>('http://localhost:8080/api/v1/category/user=' + userId).subscribe(
        (data: CategoryDto[]) => 
          {
            this.userCategories = data;
            this.onUserCategoriesUpdateSuccess.emit();
          }
      );
    }

    getAllForToday(userId: number) {
      return this.httpClient.get<CategoryDto[]>('http://localhost:8080/api/v1/category/user=' + userId + "/today").subscribe(
        (data: CategoryDto[]) => 
          {
            console.log(data);
            this.userCategories = data;
            this.onUserCategoriesUpdateSuccess.emit();
          }
      );
    }

    getById(categoryId: number) {
      return this.httpClient.get('http://localhost:8080/api/v1/category/' + categoryId).subscribe(data => {
        this.onGetCategory.emit(data);
      });
    }

    getUserCategories() {
      return this.userCategories;
    }
  }