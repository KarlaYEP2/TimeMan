import { NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { InputTimeComponent } from './select-page/main-page/input-time/input-time.component';
import { DataListComponent } from './select-page/main-page/data-list/data-list.component';
import {MatListModule} from "@angular/material/list";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {ChangeListingComponent} from "./select-page/main-page/data-list/popup/changeListing.component";
import { TrackerComponent } from './select-page/main-page/tracker/tracker.component';
import {MatCardModule} from "@angular/material/card";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSelectModule} from "@angular/material/select";
import {MainPageComponent} from "./select-page/main-page/main-page.component";
import {AppRoutingModule} from "./app-routes.module";
import {StringDateFormatPipe} from "./shared/stringDateFormat.pipe";
import { SelectPageComponent } from './select-page/select-page.component';



@NgModule({
  declarations: [
    AppComponent,
    InputTimeComponent,
    DataListComponent,
    ChangeListingComponent,
    TrackerComponent,
    MainPageComponent,
    StringDateFormatPipe,
    SelectPageComponent
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
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
