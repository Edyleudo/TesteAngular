import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {DragDropModule} from '@angular/cdk/drag-drop';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule} from '@angular/material/card';
import {MatNativeDateModule} from '@angular/material/core';
import { CalendarComponent } from './calendar/calendar.component';
import { GridComponent } from './grid/grid.component';



@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
  


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
