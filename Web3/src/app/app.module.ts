import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider, LoginOpt } from "angularx-social-login";

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
import { ForgotPasswordModalComponent } from './_modals/forgot-password-modal/forgot-password-modal.component';
import { SlickSliderComponent } from './shared/slick-slider/slick-slider.component';
import { RegistryComponent } from './registry/registry.component';
import { WebsiteComponent } from './website/website.component';
import { PlanningToolsComponent } from './planning-tools/planning-tools.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorSignupComponent } from './vendor-signup/vendor-signup.component';
import { AboutComponent } from './about/about.component';
import { CategoryHomeComponent } from './shared/category-home/category-home.component';
import { KeyvaluepaPipe } from './_pipes/keyvaluepa.pipe';

const fbLoginOptions: LoginOpt = {
  scope: 'pages_messaging,pages_messaging_subscriptions,email,pages_show_list,manage_pages',
  return_scopes: true,
  enable_profile_selector: true
};

const googleLoginOptions: LoginOpt = {
  scope: 'profile email'
};
const config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com', googleLoginOptions)
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider('561602290896109', fbLoginOptions)
  },
  {
    id: LinkedInLoginProvider.PROVIDER_ID,
    provider: new LinkedInLoginProvider('78iqy5cu2e1fgr')
  }
]);

export function provideConfig() {
  return config;
}

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
    ForgotPasswordContentComponent,
    ForgotPasswordModalComponent,
    SlickSliderComponent,
    RegistryComponent,
    WebsiteComponent,
    PlanningToolsComponent,
    VendorsComponent,
    VendorSignupComponent,
    AboutComponent,
    CategoryHomeComponent,
    KeyvaluepaPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    MatButtonModule,
    MatCheckboxModule,
    SlickCarouselModule,
    SocialLoginModule
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: AuthServiceConfig, useFactory: provideConfig},
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
