import { Component } from '@angular/core';
import { User, Role } from './_models';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import {AppConstants} from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    currentUser: User;
    ImageBaseUrl:string;
    today: number = Date.now();
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.ImageBaseUrl=AppConstants.ImageBaseUrl;
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }
}
