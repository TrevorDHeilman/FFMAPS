import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPlaceableComponent } from './placeable-add.component';

describe('AddPlaceableComponent', () => {
  let component: AddPlaceableComponent;
  let fixture: ComponentFixture<AddPlaceableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPlaceableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPlaceableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
