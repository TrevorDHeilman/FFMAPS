import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceableComponent } from './placeable.component';

describe('PlaceableComponent', () => {
  let component: PlaceableComponent;
  let fixture: ComponentFixture<PlaceableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
