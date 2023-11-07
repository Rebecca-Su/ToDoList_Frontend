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
  public errors : string[] = [];


  constructor(
    public userService: UserServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.userDto = {...this.userService.getLoggedUser()!};
    this.userService.onUserUpdate.subscribe(_ => {
      this.exit();
    })

    this.userService.onUserUpdateFail.subscribe(error => {
      this.errors = [error.error.errors ? error.error.errors : error.message];
    })
  }

  updateUser() {
    this.userService.saveUser(this.userDto);
  }

  exit() {
    this.router.navigate(['task-list']);
  }

}
