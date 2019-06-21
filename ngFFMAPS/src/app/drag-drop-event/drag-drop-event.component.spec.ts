import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragDropEventComponent } from './drag-drop-event.component';

describe('DragDropEventComponent', () => {
  let component: DragDropEventComponent;
  let fixture: ComponentFixture<DragDropEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragDropEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragDropEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
