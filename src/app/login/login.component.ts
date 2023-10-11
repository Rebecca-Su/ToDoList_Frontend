import { Component, OnInit } from '@angular/core';
import { UserDto } from 'src/task-api/models/user-dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserServiceService } from '../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userDto: UserDto = {};
  public hide = true;
  public errors = [];
  // public user: any;
  // public loaded: boolean = false;

  constructor(
    public userService: UserServiceService,
    public router: Router
  ) {}

  ngOnInit() {
    // this.getUsers().subscribe((res: any) => this.user = res["firstName"]);
  }

  login() {
    this.userService.getUser(this.userDto)
    .subscribe(data => {
      this.userService.loggedUser = data;
      // localStorage.setItem('loggedUser', JSON.stringify(data));
      this.router.navigate(['todo-list']);
    },
    error => {
      this.errors = [];
      if (error.error.errors === null) {
        // this.errors.push(error.error.message);
        console.log("login error");
      } else {
        this.errors = error.error.errors;
      }
    });;
  }
} 


