import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {ServerComponent} from './server/server.component';
import { HomeComponent } from './home/home.component';
import { LoginInComponent } from './login-in/login-in.component';

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    HomeComponent,
    LoginInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
