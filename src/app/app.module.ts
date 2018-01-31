import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA } from '@angular/core';


import {
  AppComponent,
  GuideComponent,
  JumbotronComponent,
  NavbarComponent,
} from './components';

import { routing } from './app.routing';
import { RecordsComponent } from './components/pages/records/records.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GuideComponent,
    NavbarComponent,
    JumbotronComponent,
    RecordsComponent, 
    
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    routing,
    NgbModule.forRoot()
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
