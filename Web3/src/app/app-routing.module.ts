import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AdminComponent } from './admin';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';
import { Role } from './_models';
import { RegistryComponent } from './registry/registry.component';
import { WebsiteComponent } from './website/website.component';
import { PlanningToolsComponent } from './planning-tools/planning-tools.component';
import { VendorsComponent } from './vendors/vendors.component';
import { VendorSignupComponent } from './vendor-signup/vendor-signup.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    data: { roles: [Role.Admin] }
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'create-wedding-registry',
    component: RegistryComponent
  },
  {
    path: 'create-wedding-websites',
    component: WebsiteComponent
  },
  {
    path: 'planning-tools',
    component: PlanningToolsComponent
  },
  {
    path: 'vendors',
    component: VendorsComponent
  },
  {
    path: 'vendor-signup',
    component: VendorSignupComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
