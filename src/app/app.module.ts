import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FlexLayoutModule } from '@angular/flex-layout';

import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import { MainPageComponent } from './main-page/main-page.component';
import { MainTeamComponent } from './main-team/main-team.component';
import { CardComponent } from './main-team/card/card.component';
import { MainInfoComponent } from './main-info/main-info.component';
import { MainContactComponent } from './main-contact/main-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainTeamComponent,
    CardComponent,
    MainInfoComponent,
    MainContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
