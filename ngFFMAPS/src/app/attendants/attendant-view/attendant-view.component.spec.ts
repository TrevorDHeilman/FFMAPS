import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantViewComponent } from './attendant-view.component';

describe('AttendantViewComponent', () => {
  let component: AttendantViewComponent;
  let fixture: ComponentFixture<AttendantViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendantViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendantViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
