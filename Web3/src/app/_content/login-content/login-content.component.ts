import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormGroup, FormBuilder, Validators, AsyncValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from '../../_services/index';
import { first, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppConstants } from '../../app.constants';

@Component({
  selector: 'app-login-content',
  templateUrl: './login-content.component.html',
  styleUrls: ['./login-content.component.scss']
})
export class LoginContentComponent implements OnInit {
  @Output() valueCount = new EventEmitter();
  ImageBaseUrl = AppConstants.ImageBaseUrl;
  isLogin: boolean;
  isForgotPassword: boolean;
  isPhoneNo: boolean;
  maxLength: number = 250;
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  remember: true;
  error = '';
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    if (this.authenticationService.currentUserValue) {
      this.router.routeReuseStrategy.shouldReuseRoute = function () {
        return false;
      };
      this.router.navigateByUrl('/RefrshComponent', { skipLocationChange: true }).then(() =>
        this.router.navigate(['/']));
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      remember: [''],
      loginMethod:['',[Validators.required]]
    });
    this.loginForm.controls.remember.setValue(true);
    this.loginForm.controls.loginMethod.setValue('emailLogin');
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;
    if (this.f.loginMethod.value == 'emailLogin') {
      this.authenticationService.login(this.f.userName.value, this.f.password.value,this.f.loginMethod.value)
        .pipe(first())
        .subscribe(
        data => {
          this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() =>
            this.router.navigate(['/']));
          //this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
    }
    if (this.f.loginMethod.value == 'phoneLogin') {
      this.authenticationService.login(this.f.userName.value, this.f.password.value, this.f.loginMethod.value)
        .pipe(first())
        .subscribe(
        data => {
          this.router.navigateByUrl('/login', { skipLocationChange: true }).then(() =>
            this.router.navigate(['/']));
          //this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error = error;
          this.loading = false;
        });
    }
    
  }

  onForgotPaswordClick() {
    this.isForgotPassword = true;
    this.isLogin = false;
    this.valueCount.emit(this.isForgotPassword);

  }
  onChange(input) {
    if (input && !isNaN(input)) {
      this.isPhoneNo = true;
      this.maxLength = 10;
      this.f.userName.setValidators([Validators.required, Validators.pattern('^[6-9][0-9]{9}$')]);
      this.f.userName.setAsyncValidators(this.existingMobileNumberValidator());
      this.loginForm.controls.loginMethod.setValue('phoneLogin');
    }
    else {
      this.isPhoneNo = false;
      this.maxLength = 250;
      this.f.userName.setValidators([Validators.required, Validators.email]);
      this.f.userName.setAsyncValidators(this.existingEmailValidator());
      this.loginForm.controls.loginMethod.setValue('emailLogin');
    }
  }

  existingMobileNumberValidator(): AsyncValidatorFn {
   return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
     return this.authenticationService.checkMobileNoExists(control.value).pipe(map(x => {
       return !x.mobileNoExist ? { "mobileNoExists": true } : null})
      
    );
  };
  }

  existingEmailValidator(): AsyncValidatorFn {
    return (control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
      return this.authenticationService.checkEmailExists(control.value).pipe(map(x => {
        return !x.emailExist ? { "emailExists": true } : null
      })

      );
    };
  }



}
  
