import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdventEntryDialogComponent } from './advent-entry-dialog.component';

describe('AdventEntryDialogComponent', () => {
  let component: AdventEntryDialogComponent;
  let fixture: ComponentFixture<AdventEntryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdventEntryDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdventEntryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
