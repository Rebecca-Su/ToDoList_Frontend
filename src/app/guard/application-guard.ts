import { Injectable } from "@angular/core";
import { UserServiceService } from "../services/user-service.service";
import { Router } from "@angular/router";

@Injectable()
export class UserGuard {
    constructor(
        public userService: UserServiceService,
        public router: Router
    ) {}

    canActivate(){
        if(this.userService.getLoggedUser()) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }
}