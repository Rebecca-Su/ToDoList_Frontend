import { Component, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { UserServiceService } from './services/user-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  mode:FormControl = new FormControl('slide');
  title = 'toDoList_Frontend';

  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(
    public userService: UserServiceService,
  ) {}

  toggleMenuClick() {
    this.sidenav.toggle;
  }

  isUserLogged() {
    return this.userService.getLoggedUser() !== null && this.userService.getLoggedUser() !== undefined;
  }
}
