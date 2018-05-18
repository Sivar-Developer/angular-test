import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SivarComponent } from './sivar/sivar.component';
import { HomeComponent } from './components/home/home.component';
import { ArrayComponent } from './components/array/array.component';
import { EventsComponent } from './components/events/events.component';
import { CeventsComponent } from './components/cevents/cevents.component';

@NgModule({
  declarations: [
    AppComponent,
    SivarComponent,
    HomeComponent,
    ArrayComponent,
    EventsComponent,
    CeventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
