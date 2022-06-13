import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {AppComponent} from './app.component';
import { CreditCardDirectivesModule } from 'angular-cc-library';

@NgModule({
  /* set respective calls to components, services, etc here */
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, CreditCardDirectivesModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
