import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/task-api/models/user-dto';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';
import { CategoryServiceService } from '../services/category-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userDto: UserDto = {};
  public hide = true;
  public errors: string[] = [];
  // public user: any;
  // public loaded: boolean = false;

  constructor(
    public userService: UserServiceService,
    public categoryService: CategoryServiceService,
    public router: Router
  ) {}

  ngOnInit() {
    this.userService.onLoginComplete.subscribe(_ => {
        this.router.navigate(['task-list']);
    });
    this.userService.onLoginFail.subscribe(error => 
      {
        console.log(error);
        this.errors = [error.error.message ? error.error.message  : error.message];
      })
  }

  login() {
    this.userService.logIn(this.userDto);
  }

  signup() {
    this.router.navigate(['signup']);
  }

  isUserLogged() {
    return this.userService.getLoggedUser() !== null && this.userService.getLoggedUser() !== undefined;
  }
} 


