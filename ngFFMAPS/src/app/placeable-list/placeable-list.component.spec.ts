import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceableListComponent } from './placeable-list.component';

describe('PlaceableListComponent', () => {
  let component: PlaceableListComponent;
  let fixture: ComponentFixture<PlaceableListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceableListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
