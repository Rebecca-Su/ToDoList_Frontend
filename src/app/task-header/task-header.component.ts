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

  menuButtonClick() {
    console.log("Menu clicked")
    this.onMenuButtonClick.emit();
  }

  addTaskClick() {
    this.router.navigate(['task-list', 'new']);
  }

  addCategoryClick() {
    this.router.navigate(['categories', 'new']);
  }

  goToProfile() {
    this.router.navigate(['profile']);
  }

  goToHome() {
    this.router.navigate(['task-list']);
  }

  logout() {
    this.userService.logout();
  }

  getUserFirstName() {
    return this.userService.getLoggedUser()!.firstName!;
  }
}
