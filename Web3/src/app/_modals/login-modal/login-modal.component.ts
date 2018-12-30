import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LoginContentComponent } from '../../_content/login-content/login-content.component';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @Input() title = 'Register';
  isLogin = true;
  isForgotPassword=false;
  constructor() {
    //this.isLogin ? this.isForgotPassword = false : this.isForgotPassword = true;
    
  }

  ngOnInit() {
  }
  displayLogin(val) {
    this.isForgotPassword = val;
    if (val) {
      this.isLogin = false;
    }
  }

}
