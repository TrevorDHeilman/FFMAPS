import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewSearchReceiptComponent } from './dialog-overview-search-receipt.component';

describe('DialogOverviewSearchReceiptComponent', () => {
  let component: DialogOverviewSearchReceiptComponent;
  let fixture: ComponentFixture<DialogOverviewSearchReceiptComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOverviewSearchReceiptComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewSearchReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
