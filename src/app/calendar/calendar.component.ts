import { Component, OnInit, Input, Inject} from '@angular/core';
import {
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { DataService } from '../data.service';
import {Dialog, DialogRef, DIALOG_DATA} from '@angular/cdk/dialog';


export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  animal: string | undefined;
  name: string | undefined;
  panelOpenState = false;
  selected: Date | null = null;
  private localDate: Date = new Date();
  weekDayNames = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  horarios: any[] = [];
  weeksCount: number = 0;
  weeks: any[] = [];


  constructor(public dialog: Dialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open<string>(CdkDialogOverviewExampleDialog, {
      width: '250px',
      data: {name: this.name, animal: this.animal},
    });

    dialogRef.closed.subscribe(result => {
      console.log('The dialog was closed');
      this.animal = result;
    });
  }


  // @Input()
  // set date(date: Date) {
  //   this.localDate = date;

  //   const year = this.localDate.getFullYear();
  //   const month = this.localDate.getMonth();
  //   const day = 1;

  //   const dayOfTheWeek = new Date(year, month, day).getDay();
  //   this.weeksCount = this.getWeeksCount(this.localDate);

  //   for (let i = 0; i < this.weeksCount; ++i) {
  //     this.weeks.push([{}, {}, {}, {}, {}, {}, {}]);
  //   }

  //   this.dataService.getSchedulesFor(year, month).subscribe((schedules) => {
  //     this.fillDaysWithSchedules(dayOfTheWeek, schedules);
  //   });
  // }

  // constructor(private dataService: DataService) {}

  ngOnInit() {
    this.horarios.push({ horario: '00:00', eventos: [{ nome: 'Evento 01' }] });

    this.horarios.push({
      horario: '01:00',
      eventos: [{ nome: 'Evento 02' }, { nome: 'Evento 03' }],
    });
    this.horarios.push({ horario: '02:00', eventos: [] });
    this.horarios.push({ horario: '03:00', eventos: [] });
    this.horarios.push({ horario: '04:00', eventos: [] });
    this.horarios.push({ horario: '05:00', eventos: [] });
    this.horarios.push({ horario: '06:00', eventos: [{ nome: 'Evento 04' }] });

    console.log(this.horarios[0].eventos);
  }

  addEvent() {
    console.log(this.horarios[3]);
    this.horarios[3].eventos.push({ nome: 'Evento extra' });
  }

  drop(event: CdkDragDrop<string[]>) {

    console.log(event);

    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  showData() {
    console.log(JSON.stringify(this.weeks, null, 2));
  }

  private getSchedulesForDay(schedules: any[], currentDate: Date): any[] {
    return schedules
      .filter((x) => this.isSameDate(x.date, currentDate))
      .map((x) => {
        const tmp = { ...x };
        delete tmp.date;
        return tmp;
      });
  }

  private fillDaysWithSchedules(firstDayOfTheMonth: number, schedules: any[]) {
    const year = this.localDate.getFullYear();
    const month = this.localDate.getMonth();
    let day = 1;

    for (let week = 0; week < this.weeksCount; ++week) {
      let weekDay = week === 0 ? firstDayOfTheMonth : 0;
      for (; weekDay < this.weekDayNames.length; ++weekDay) {
        const currentDate = new Date(Date.UTC(year, month, day));
        this.weeks[week][weekDay] = {
          date: currentDate,
          day,
          weekDay: this.weekDayNames[weekDay],
          schedules: this.getSchedulesForDay(schedules, currentDate),
        };

        ++day;
        if (new Date(year, month, day).getMonth() !== month) {
          return;
        }
      }
    }
  }

  private isSameDate(a: Date, b: Date) {
    return (
      a.getFullYear() === b.getFullYear() &&
      a.getMonth() === b.getMonth() &&
      a.getDate() === b.getDate()
    );
  }

  private getWeeksCount(date: Date): number {
    const first = new Date(date.getFullYear(), date.getMonth(), 1);
    const last = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    const daysCount = first.getDay() + last.getDate();
    const weeksCount = Math.ceil(daysCount / 7);

    return weeksCount;
  }
}


@Component({
  selector: 'cdk-dialog-overview-example-dialog',
  templateUrl: 'cdk-dialog-overview-example-dialog.html',
  styleUrls: ['cdk-dialog-overview-example-dialog.css'],
})
export class CdkDialogOverviewExampleDialog {
  constructor(public dialogRef: DialogRef<string>, @Inject(DIALOG_DATA) public data: DialogData) {}
}


