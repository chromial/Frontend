import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';  // <-- #1 import module

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { ReactiveRadioButtonComponent } from './reactive-radio-button/reactive-radio-button.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    ReactiveRadioButtonComponent
  ],
  imports: [
    BrowserModule,
	  ReactiveFormsModule // <-- #2 add to @NgModule imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
