import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
//import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitFormComponent } from './git-form/git-form.component';
import { GithubResultComponent } from './github-result/github-result.component';

@NgModule({
  declarations: [
    AppComponent,
    GitFormComponent,
    GithubResultComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
   // HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
