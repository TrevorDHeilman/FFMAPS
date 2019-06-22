import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingClientViewComponent } from './pending-client-view.component';

describe('PendingClientViewComponent', () => {
  let component: PendingClientViewComponent;
  let fixture: ComponentFixture<PendingClientViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingClientViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingClientViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
