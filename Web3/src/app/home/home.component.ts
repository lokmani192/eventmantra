import { Component, OnInit } from '@angular/core';
import { User } from '../_models';
import { UserService, AuthenticationService } from '../_services';
import { first } from 'rxjs/operators';
import { AppConstants } from '../app.constants';
import { Title } from '@angular/platform-browser';
import { AuthService } from 'angularx-social-login';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedInLoginProvider } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Events, Free Online Wedding Planner & Wedding Tools';
  currentUser: User;
  userFromApi: User;
  imageBaseUrl = AppConstants.ImageBaseUrl;
  websiteUrl = AppConstants.WebsiteUrl;
  user: SocialUser;
  loggedIn: boolean;
  constructor(
    private userService: UserService,
    private authService: AuthService,
    private authenticationService: AuthenticationService,
    private titleService:Title
  ) {
    this.titleService.setTitle(this.title);
    this.currentUser = this.authenticationService.currentUserValue;
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
    });
    //this.userService.getById(this.currentUser.id).pipe(first()).subscribe(user => {
    //this.userFromApi = user;
    //});
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signInWithLinkedIn(): void {
    this.authService.signIn(LinkedInLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
  }
}

