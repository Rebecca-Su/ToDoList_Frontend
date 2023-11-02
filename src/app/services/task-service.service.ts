import { HttpClient } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { CategoryDto } from "src/task-api/models/category-dto";
import { TaskDto } from "src/task-api/models/task-dto";

@Injectable({
    providedIn: 'root'
  })
  export class TaskServiceService {
    private userTasks: TaskDto[] = [];
    public onTasksUpdate = new EventEmitter();
    public onGetTaskDone = new EventEmitter();

    constructor(
        public httpClient: HttpClient
    ){}

    save(taskDto: TaskDto) {
      this.httpClient.post('http://localhost:8080/api/v1/tasks/', taskDto).subscribe(data => 
      {
        this.onTasksUpdate.emit();
      });
    }

    getById(taskId: number) {
      this.httpClient.get('http://localhost:8080/api/v1/tasks/' + taskId).subscribe(data => 
      {
        this.onGetTaskDone.emit(data);
      });
    }
  }