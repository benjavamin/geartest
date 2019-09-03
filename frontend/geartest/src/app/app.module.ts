import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WwComponentComponent } from './ww-component/ww-component.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    WwComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
