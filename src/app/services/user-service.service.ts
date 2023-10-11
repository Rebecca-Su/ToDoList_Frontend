import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDto } from 'src/task-api/models/user-dto';

@Injectable({
providedIn: 'root'
})
export class UserServiceService {
    public loggedUser: UserDto|null = null;

    constructor(private httpClient: HttpClient) {}

    getLoggedUser() {
        if(this.loggedUser !== null && this.loggedUser !== undefined) {
            return this.loggedUser;
        }

        return null;
    }

    getUsers() {
        console.log("Getting users...");

        let root = 'http://localhost:8080/api/v1/user/1';
        return this.httpClient.get(root);

        // .pipe(map((res: any) => this.user = res["firstName"]));
        
    }

    getUser(userDto: UserDto) {
        console.log("Getting user...");

        return this.httpClient.post('http://localhost:8080/api/v1/auth/', userDto);
    }
}