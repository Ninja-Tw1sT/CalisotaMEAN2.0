import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { AddCertificationComponent } from './components/add-certification/add-certification.component';
import { AddEducationComponent } from './components/add-education/add-education.component';
import { AddEmploymentComponent } from './components/add-employment/add-employment.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { GamecardComponent } from './components/gamecard/gamecard.component';


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
    path: 'userprofile', component: UserProfileComponent, canActivate: [AuthGuard]
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
    path: 'contacts', component: ContactsComponent, canActivate: [AuthGuard]
  },
  {
    path: 'gamecard', component: GamecardComponent, canActivate: [AuthGuard]
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
