import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { CategoryDto } from "src/task-api/models/category-dto";
import { TaskDto } from "src/task-api/models/task-dto";
import { UserServiceService } from "./user-service.service";

@Injectable({
    providedIn: 'root'
  })
  export class TaskServiceService {
    public onTasksUpdateSuccess = new EventEmitter();
    public onGetTaskDone = new EventEmitter();
    public onTaskUpdateFail = new EventEmitter();

    constructor(
        public httpClient: HttpClient,
        public userService: UserServiceService
    ){}

    save(taskDto: TaskDto) {
      this.httpClient.post('http://localhost:8080/api/v1/tasks/', taskDto).subscribe({
        next: data => {
          this.onTasksUpdateSuccess.emit();
        },
        error: error => {
          this.onTaskUpdateFail.emit(error);
        }
      });
    }

    getById(taskId: number) {
      this.httpClient.get('http://localhost:8080/api/v1/tasks/' + taskId).subscribe(data => 
      {
        this.onGetTaskDone.emit(data);
      });
    }
  }