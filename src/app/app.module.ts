import { DataService } from './services/data.service';
import { HttpmoduleService } from './services/httpmodule.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { SivarComponent } from './sivar/sivar.component';
import { HomeComponent } from './components/home/home.component';
import { ArrayComponent } from './components/array/array.component';
import { EventsComponent } from './components/events/events.component';
import { CeventsComponent } from './components/cevents/cevents.component';
import { FormsComponent } from './components/forms/forms.component';
import { DataComponent } from './components/data/data.component';
import { HttpmoduleComponent } from './components/httpmodule/httpmodule.component';

@NgModule({
  declarations: [
    AppComponent,
    SivarComponent,
    HomeComponent,
    ArrayComponent,
    EventsComponent,
    CeventsComponent,
    FormsComponent,
    DataComponent,
    HttpmoduleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    HttpmoduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
