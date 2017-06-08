import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import {DataService} from "./data.service";
import {TruncateTextPipe} from "./shared/truncate-text.pipe"

import {DialogModule} from 'primeng/primeng';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    VehicleComponent,
    TruncateTextPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DialogModule,
    BrowserAnimationsModule

  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
