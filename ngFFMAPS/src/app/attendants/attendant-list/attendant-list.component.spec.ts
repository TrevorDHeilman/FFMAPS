import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendantListComponent } from './attendant-list.component';

describe('AttendantListComponent', () => {
  let component: AttendantListComponent;
  let fixture: ComponentFixture<AttendantListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendantListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendantListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
