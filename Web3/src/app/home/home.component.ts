import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { first } from 'rxjs/operators';
import { AppConstants } from '../app.constants';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Events, Free Online Wedding Planner & Wedding Tools';
  currentUser: User;
  userFromApi: User;
  imageBaseUrl = AppConstants.ImageBaseUrl;
  websiteUrl = AppConstants.WebsiteUrl;
  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private titleService:Title
  ) {
    this.titleService.setTitle(this.title);
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    //this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
    //this.userFromApi = user;
    //});
   }
}

