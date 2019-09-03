import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { WwComponentComponent } from './ww-component/ww-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule, MatDialogModule, MatFormFieldModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import {ChooseItemModalComponent} from './ww-component/choose-item-modal/choose-item-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    WwComponentComponent,
    ChooseItemModalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
