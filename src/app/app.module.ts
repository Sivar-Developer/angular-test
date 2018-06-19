import { DataService } from './services/data.service';
import { HttpmoduleService } from './services/httpmodule.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SivarComponent } from './sivar/sivar.component';
import { HomeComponent } from './components/home/home.component';
import { ArrayComponent } from './components/array/array.component';
import { EventsComponent } from './components/events/events.component';
import { CeventsComponent } from './components/cevents/cevents.component';
import { FormsComponent } from './components/forms/forms.component';
import { DataComponent } from './components/data/data.component';
import { HttpmoduleComponent } from './components/httpmodule/httpmodule.component';
import { FormsTwoComponent } from './components/forms-two/forms-two.component';
import { HttpmoduleTwoComponent } from './components/httpmodule-two/httpmodule-two.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const appRoute: Routes = [
  {path: '', component: HomeComponent},
  {path: 'profiles', component: ProfileComponent},
];


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
    HttpmoduleComponent,
    FormsTwoComponent,
    HttpmoduleTwoComponent,
    ProfileComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [
    DataService,
    HttpmoduleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
