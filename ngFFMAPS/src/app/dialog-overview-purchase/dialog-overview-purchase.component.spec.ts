import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogOverviewPurchaseComponent } from './dialog-overview-purchase.component';

describe('DialogOverviewPurchaseComponent', () => {
  let component: DialogOverviewPurchaseComponent;
  let fixture: ComponentFixture<DialogOverviewPurchaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogOverviewPurchaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogOverviewPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
