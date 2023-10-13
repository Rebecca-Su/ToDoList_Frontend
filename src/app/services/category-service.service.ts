import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { CategoryDto } from "src/task-api/models/category-dto";

@Injectable({
    providedIn: 'root'
  })
  export class CategoryServiceService {
    private userCategories: CategoryDto[] = [];
    public onUserCategoriesUpdate = new EventEmitter();

    constructor(
        public httpClient: HttpClient
    ){}

    save(category: CategoryDto) {
        return this.httpClient.post('http://localhost:8080/api/v1/category/', category);
    }

    getAllByUser(userId: number) {
      this.httpClient.get<CategoryDto[]>('http://localhost:8080/api/v1/category/user=' + userId).subscribe((data: CategoryDto[]) => {
        this.userCategories = data;
        this.onUserCategoriesUpdate.emit();
      });
    }

    getById(categoryId: number) {
      return this.httpClient.get('http://localhost:8080/api/v1/category/' + categoryId);
    }

    getUserCategories() {
      return this.userCategories;
    }
  }