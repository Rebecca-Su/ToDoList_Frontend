import { Component, Input } from '@angular/core';
import { CategoryDto } from 'src/task-api/models/category-dto';
import { TaskDto } from 'src/task-api/models/task-dto';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { TaskServiceService } from '../services/task-service.service';

@Component({
  selector: 'app-task-element',
  templateUrl: './task-element.component.html',
  styleUrls: ['./task-element.component.scss']
})
export class TaskElementComponent {
  @Input() taskDto!: TaskDto;
  @Input() category!: CategoryDto;

  constructor(
    public taskService: TaskServiceService,
    public router: Router,
    public userService: UserServiceService
  ){}

  ngOnInit() {
    this.setUpTask();
  }

  setUpTask() {
    this.taskDto.category = {id: this.category.id};
    this.taskDto.category.user = this.userService.getLoggedUser();
  }

  addToFavorite() {
    this.taskDto.favorite = true;
    this.saveTask();
  }

  removeFromFavorite() {
    this.taskDto.favorite = false;
    this.saveTask();
  }

  setDone() {
    this.taskDto.done = true;
    this.saveTask();
  }

  setUnDone() {
    this.taskDto.done = false;
    this.saveTask();
  }

  saveTask() {
    this.setUpTask();
    this.taskService.save(this.taskDto)
      .subscribe(data => {
        this.taskDto = data;
        this.setUpTask();
      });
  }

  editTask(taskId: number|undefined) {
    this.router.navigate(['task-list', 'new', taskId]);
  }
}
