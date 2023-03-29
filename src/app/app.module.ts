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
import {MatDialogModule} from '@angular/material/dialog';
import {DialogModule} from '@angular/cdk/dialog';
import { DataService } from './data.service';
import { FormsModule } from '@angular/forms';

import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';

import {CdkDialogOverviewExampleDialog} from './calendar/calendar.component';










@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    GridComponent,
    CdkDialogOverviewExampleDialog

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    MatDatepickerModule,
    MatCardModule,
    MatNativeDateModule,
    MatDialogModule,
    DialogModule,
    FormsModule,
    MatExpansionModule,
    MatInputModule,
    MatSelectModule,
    
    
  


  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
