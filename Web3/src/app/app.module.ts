import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor,ErrorInterceptor } from './_helpers';
import { HeaderComponent } from './shared/header';
import { FooterComponent } from './shared/footer';
import { ResizeHeaderDirective } from './shared/directives/resize-header.directive';
import { ModalComponent } from './modal/modal.component';
import { LoginModalComponent } from './_modals/login-modal/login-modal.component';
import { LoginContentComponent } from './_content/login-content/login-content.component';
import { ForgotPasswordContentComponent } from './_content/forgot-password-content/forgot-password-content.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    HeaderComponent,
    FooterComponent,
    ResizeHeaderDirective,
    ModalComponent,
    LoginModalComponent,
    LoginContentComponent,
    ForgotPasswordContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    NgbActiveModal,

    // provider used to create fake backend
    //fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginModalComponent
  ]
})
export class AppModule { }
