import { Component } from '@angular/core';
import { UserDto } from 'src/task-api/models/user-dto';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public userDto: UserDto = {};
  public hide = true;
  public errors: string[] = [];

  constructor(
    public userService: UserServiceService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.userService.onUserRegistered.subscribe(_ => {
      this.router.navigate(['login']);
    });

    this.userService.onUserRegisterFail.subscribe(error => {
      this.errors = [error.error.errors ? error.error.errors : error.message];
    })
  }

  updateUser() {
    this.userService.registerUser(this.userDto);
  }

  exit() {
    this.router.navigate(['login']);
  }
}
