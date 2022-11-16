import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { InputTimeComponent } from './main-page/input-time/input-time.component';
import { DataListComponent } from './main-page/data-list/data-list.component';
import {ListService} from "./list.service";
import {MatListModule} from "@angular/material/list";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatNativeDateModule} from "@angular/material/core";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {ChangeListingComponent} from "./main-page/data-list/popup/changeListing.component";
import { TrackerComponent } from './main-page/tracker/tracker.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {Routes, RouterModule} from "@angular/router";
import {MainPageComponent} from "./main-page/main-page.component";
import {AppRoutingModule} from "./app-routes.module";



@NgModule({
  declarations: [
    AppComponent,
    InputTimeComponent,
    DataListComponent,
    ChangeListingComponent,
    TrackerComponent,
    MainPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'kr'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
