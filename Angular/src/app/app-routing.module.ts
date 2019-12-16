import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { AddCertificationComponent } from './components/add-certification/add-certification.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddEmploymentComponent } from './components/add-employment/add-employment.component';
import { GamecardComponent } from './components/gamecard/gamecard.component';
import { ReferralsComponent } from './components/referrals/referrals.component';
import { AboutComponent } from './components/about/about.component';
import { VitaeComponent } from './components/vitae/vitae.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { AddDocumentationComponent } from './components/add-documentation/add-documentation.component';


export const routes: Routes = [
  {
    path: 'signup', component: UserComponent,
    children: [{ path: '', component: SignUpComponent }]
  },
  {
    path: 'login', component: UserComponent,
    children: [{ path: '', component: SignInComponent }]
  },
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-certification', component: AddCertificationComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-education', component: AddEducationComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-employment', component: AddEmploymentComponent, canActivate: [AuthGuard]
  },
  {
    path: 'add-documentation', component: AddDocumentationComponent, canActivate: [AuthGuard]
  },
  {
    path: 'referrals', component: ReferralsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'about', component: AboutComponent, canActivate: [AuthGuard]
  },
  {
    path: 'vitae', component: VitaeComponent, canActivate: [AuthGuard]
  },
  {
    path: 'gamecard', component: GamecardComponent, canActivate: [AuthGuard]
  },
  {
    path: 'welcome', component: WelcomeComponent, canActivate: [AuthGuard]
  },
  {
    path: '', redirectTo: '/login', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
