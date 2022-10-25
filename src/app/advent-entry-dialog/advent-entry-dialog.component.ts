import {Component, Inject, OnInit} from '@angular/core';
import {Entry} from '../advent-calendar/entry';
import {EntryService} from '../advent-calendar/entry.service';

@Component({
  selector: 'app-advent-entry-dialog',
  templateUrl: './advent-entry-dialog.component.html',
  styleUrls: ['./advent-entry-dialog.component.scss']
})
export class AdventEntryDialogComponent implements OnInit {
  entry: Entry | undefined;
  constructor( private entryService: EntryService ) {
    if (this.entryService.currentSelectedItem) {
      this.entry = this.entryService.currentSelectedItem;
    }
  }

  ngOnInit(): void {
  }

}
