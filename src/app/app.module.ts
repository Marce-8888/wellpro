import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { TodoComponent } from './components/todo/todo.component';
import { FeedComponent } from './components/feed/feed.component';
import { HelpComponent } from './components/help/help.component';
import { StartComponent } from './components/start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    TodoComponent,
    FeedComponent,
    HelpComponent,
    StartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
