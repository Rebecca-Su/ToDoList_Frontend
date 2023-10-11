import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrls: ['./task-header.component.scss']
})
export class TaskHeaderComponent {
  @Output() onMenuButtonClick = new EventEmitter<any>;
  public userName = "Default";

  constructor(
    public router: Router,
    public userService: UserServiceService
    ) { }

  ngOnInit() {
    console.log("Task header loaded");
  }

  menuButtonClick() {
    this.onMenuButtonClick.emit();
  }

  goToHome() {
    // this.router.navigate(['todo-list']);
  }

  addTodoClick() {
    // this.router.navigate(['todo-list', 'new']);
  }

  addCategoryClick() {
    // this.router.navigate(['categories', 'new']);
  }

  goToProfile() {
    // this.router.navigate(['profile']);
  }

  logout() {
    // this.userService.loggedUser = null;
    // localStorage.setItem('loggedUser', null);
    // this.router.navigate(['login']);
  }
}
