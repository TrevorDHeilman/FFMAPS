import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DraglayoutComponent } from './draglayout.component';

describe('DraglayoutComponent', () => {
  let component: DraglayoutComponent;
  let fixture: ComponentFixture<DraglayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DraglayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DraglayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
