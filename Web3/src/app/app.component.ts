import { Component, ElementRef, ViewChild, HostListener, ViewEncapsulation } from '@angular/core';
import { User, Role } from './_models';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services';
import {AppConstants} from './app.constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  //encapsulation: ViewEncapsulation.None
})
export class AppComponent {
    currentUser: User;
    isFooterFixed: boolean = false;
    today: number = Date.now();
    constructor(
        private element: ElementRef,
        private router: Router,
        private authenticationService: AuthenticationService
    ) {
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }

    get isAdmin() {
        return this.currentUser && this.currentUser.role === Role.Admin;
    }

    logout() {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
      this.resize();
    }

    @HostListener('window:load', ['$event'])
    onLoad(event) {
      console.log("load");
      this.resize();
    }

    @HostListener('window:scroll', ['$event'])
    onScroll(event) {
      this.resize();
    }

    resize() {
      if (window.innerHeight > this.element.nativeElement.parentNode.clientHeight) {
        this.isFooterFixed = true;
      }
    }
}
