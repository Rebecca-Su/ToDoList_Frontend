import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryDto } from "src/task-api/models/category-dto";

@Injectable({
    providedIn: 'root'
  })
  export class CategoryServiceService {
    constructor(
        public httpClient: HttpClient
    ){}

    save(category: CategoryDto) {
        return this.httpClient.get('http://localhost:8080/api/v1/');
    }


  }