import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CategoryDto } from "src/task-api/models/category-dto";
import { TaskDto } from "src/task-api/models/task-dto";

@Injectable({
    providedIn: 'root'
  })
  export class TaskServiceService {
    constructor(
        public httpClient: HttpClient
    ){}

    save(taskDto: TaskDto) {
      return this.httpClient.post('http://localhost:8080/api/v1/tasks/', taskDto);
    }

    getById(taskId: number) {
      return this.httpClient.get('http://localhost:8080/api/v1/tasks/' + taskId);
    }
  }