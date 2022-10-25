import {Component, Input, OnInit} from '@angular/core';
import {Entry} from '../advent-calendar/entry';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {
  @Input() entry: Entry | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
