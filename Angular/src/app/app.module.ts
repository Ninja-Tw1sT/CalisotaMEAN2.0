// built-in
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { MaterialModule } from '../../projects/AdminDashboard/src/app/material/material.module';

// components
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { VitaeComponent } from './components/vitae/vitae.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddDocumentationComponent } from './components/add-documentation/add-documentation.component';
import { AddEmploymentComponent } from './components/add-employment/add-employment.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddCertificationComponent } from './components/add-certification/add-certification.component';
import { GamecardComponent } from './components/gamecard/gamecard.component';
import { ReferralsComponent } from './components/referrals/referrals.component';
import { AboutComponent } from './components/about/about.component';
import { FileSelectDirective } from 'ng2-file-upload';

// routes
import { AppRoutingModule, routes } from './app-routing.module';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserService } from './shared/user.service';
import { HomeComponent } from './components/home/home.component';

// other
import { AuthGuard } from './auth/auth.guard';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth/auth.interceptor';

import { CertificateService } from './shared/certificates.service';
import { SchoolsService } from './shared/schools.service';
import { EmployeeService } from './shared/employee.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    AddEducationComponent,
    AddCertificationComponent,
    AddEmploymentComponent,
    GamecardComponent,
    ReferralsComponent,
    AboutComponent,
    VitaeComponent,
    WelcomeComponent,
    AddDocumentationComponent,
    FileSelectDirective,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,

  ],
  exports: [ ],

  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },
  AuthGuard,
  UserService,
  CertificateService,
  SchoolsService,
  EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
