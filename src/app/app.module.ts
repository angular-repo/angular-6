import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatDialogModule} from '@angular/material';

import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login/login.component';
import { PropertsearchComponent } from './property/propertsearch/propertsearch.component';
import { ProfileComponent } from './user/profile/profile.component';
import { DataentryComponent } from './data-entry/dataentry/dataentry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    PropertsearchComponent,
    ProfileComponent,
    DataentryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScrollToModule.forRoot(),
    BrowserAnimationsModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent]
})
export class AppModule { }
