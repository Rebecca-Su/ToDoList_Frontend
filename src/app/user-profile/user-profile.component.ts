import { Component } from '@angular/core';
import { UserDto } from 'src/task-api/models/user-dto';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public userDto: UserDto = {};
  public hide = true;
  public errors = [];


  constructor(
    public userService: UserServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.userDto = {...this.userService.getLoggedUser()!};
  }

  updateUser() {
    this.userService.saveUser(this.userDto);
    this.exit();
  }

  exit() {
    this.router.navigate(['task-list']);
  }

}
