import { Injectable } from "@angular/core";
import { UserServiceService } from "../services/user-service.service";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class UserGuard {
    constructor(
        public userService: UserServiceService,
        public router: Router
    ) {}

    canActivate(){
        if(this.userService.loggedUser && this.userService.loggedUser.id) {
            return true;
        }

        this.router.navigate(['login']);
        return false;
    }
}