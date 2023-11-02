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
    public onUserCategoriesUpdate = new EventEmitter();
    public onGetCategory = new EventEmitter();

    constructor(
        public httpClient: HttpClient,
        public userService: UserServiceService
    ){}

    save(category: CategoryDto) {
      return this.httpClient.post('http://localhost:8080/api/v1/category/', category).subscribe(data => 
      {
        this.getAllByUser(this.userService.getLoggedUser()!.id!);
      });
    }

    getAllByUser(userId: number) {
      return this.httpClient.get<CategoryDto[]>('http://localhost:8080/api/v1/category/user=' + userId).subscribe((data: CategoryDto[]) => {
        this.userCategories = data;
        this.onUserCategoriesUpdate.emit();
      });
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