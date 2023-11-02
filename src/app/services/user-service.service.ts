import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { UserDto } from 'src/task-api/models/user-dto';
import { CategoryServiceService } from './category-service.service';
import { Router } from '@angular/router';

@Injectable({
providedIn: 'root'
})
export class UserServiceService {
    private loggedUser: UserDto|null = null;
    public onLoginComplete = new EventEmitter();
    public onUserUpdate = new EventEmitter();
    public onUserRegistered = new EventEmitter();

    constructor(
        private httpClient: HttpClient,
        public router: Router,
    ) {}

    getLoggedUser() {
        if(this.loggedUser !== null && this.loggedUser !== undefined) {
            return this.loggedUser;
        }

        return null;
    }

    logIn(userDto: UserDto) {
        this.httpClient.post('http://localhost:8080/api/v1/auth/', userDto).subscribe(data => {
            this.loggedUser = data;
            this.onLoginComplete.emit();
        });
    }

    logout() {
        this.loggedUser = null;
        this.router.navigate(['login']);
    }

    saveUser(userDto: UserDto) {
        this.httpClient.put('http://localhost:8080/api/v1/user/', userDto).subscribe(data => {
            this.loggedUser = data;
        });
    }

    registerUser(userDto: UserDto) {
        this.httpClient.post('http://localhost:8080/api/v1/user/', userDto).subscribe(data => {
            this.router.navigate(['login']);
        });
    }
    // .subscribe(data => {
    //     this.userDto = data;
    //     this.router.navigate(['todo-list']);
    //   });
}