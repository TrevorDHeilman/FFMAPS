import { TestBed } from '@angular/core/testing';

import { PlaceableService } from './placeable.service';

describe('PlaceableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceableService = TestBed.get(PlaceableService);
    expect(service).toBeTruthy();
  });
});
