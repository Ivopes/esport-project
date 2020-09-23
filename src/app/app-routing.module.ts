import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { MainTeamComponent } from './main-team/main-team.component';

const routes: Routes = [
  { path: 'team', component: MainTeamComponent, data: {animation: 'TeamPage'} },
  { path: '', pathMatch: 'full', component: MainPageComponent, data: {animation: 'HomePage'} }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
