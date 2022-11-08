import { NgModule } from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { InputTimeComponent } from './input-time/input-time.component';
import { DataListComponent } from './data-list/data-list.component';


@NgModule({
  declarations: [
    AppComponent,
    InputTimeComponent,
    DataListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
