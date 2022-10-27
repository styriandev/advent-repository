import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { EntryComponent } from './entry/entry.component';
import { AdventCalendarComponent } from './advent-calendar/advent-calendar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdventEntryDialogComponent } from './advent-entry-dialog/advent-entry-dialog.component';
import { MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {CanBeOpenedPipe} from './advent-calendar/can-be-opened.pipe';
import {YouTubePlayerModule} from '@angular/youtube-player';
import { VideoPlayerComponent } from './video-player/video-player.component';
import {VideoIdPipe} from './video-player/video-id.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EntryComponent,
    AdventCalendarComponent,
    AdventEntryDialogComponent,
    CanBeOpenedPipe,
    VideoPlayerComponent,
    VideoIdPipe
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    MatDialogModule,
    MatButtonModule,
    YouTubePlayerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
