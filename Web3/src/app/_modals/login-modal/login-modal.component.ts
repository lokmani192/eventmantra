import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
  @Input() title = 'Register';
  constructor() { }

  ngOnInit() {
  }

}
