import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CandidatesComponent } from './components/candidates/candidates.component';
import { SearchComponent } from './components/search/search.component';
import { VerificationComponent } from './components/verification/verification.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'settings', component: SettingsComponent
  },
  {
    path: 'candidates', component: CandidatesComponent
  },
  {
    path: 'search', component: SearchComponent
  },
  {
    path: 'verification', component: VerificationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
