import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CandidatesComponent } from './components/candidates/candidates.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'settings', component: SettingsComponent
  },
  {
    path: 'candidates', component: CandidatesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
