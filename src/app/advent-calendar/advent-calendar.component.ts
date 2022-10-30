import {Component, OnDestroy, OnInit, Pipe} from '@angular/core';
import {EntryService} from './entry.service';
import {Entry} from './entry';
import {Dialog} from '@angular/cdk/dialog';
import {AdventEntryDialogComponent} from '../advent-entry-dialog/advent-entry-dialog.component';
import {CanBeOpenedPipe} from './can-be-opened.pipe';
import {Subject} from 'rxjs';
import {first, takeUntil} from 'rxjs/operators';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-advent-calendar',
  templateUrl: './advent-calendar.component.html',
  styleUrls: ['./advent-calendar.component.scss']
})
export class AdventCalendarComponent implements OnInit, OnDestroy {
  entries: Entry[];
  private destroyed$ = new Subject<void>();

  constructor(private entryService: EntryService,
              private dialog: Dialog) {
    this.entries = this.entryService.getItems();
    this.entries[0].isOpened = true;
  }


  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  openDialog(entry: Entry): void {
    if (entry.isOpened || new CanBeOpenedPipe().transform(entry)) {
      this.entryService.currentSelectedItem = entry;
      let width = '600px';
      if (window.innerWidth < 650) {
        width = window.innerWidth - 20 + 'px';
      }
      const dialogRef = this.dialog.open(AdventEntryDialogComponent, {
        height: '500px',
        width: width
      });
      dialogRef.closed.pipe(
        first(),
        takeUntil(this.destroyed$)
      ).subscribe(() => {
        entry.isOpened = true;
        this.entryService.currentSelectedItem = undefined;
      });
    }
  }
}
