import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContactComponent } from './main-contact/main-contact.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainTeamComponent } from './main-team/main-team.component';

const routes: Routes = [
  { path: 'team', component: MainTeamComponent, data: {state: 'TeamPage'} },
  { path: 'info', component: MainInfoComponent, data: {state: 'InfoPage'} },
  { path: 'contact', component: MainContactComponent, data: {state: 'ContactPage'} },
  { path: '', pathMatch: 'full', component: MainPageComponent, data: {state: 'HomePage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
