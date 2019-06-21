import { TestBed } from '@angular/core/testing';

import { PlaceableTypeService } from './placeable-type.service';

describe('PlaceableTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlaceableTypeService = TestBed.get(PlaceableTypeService);
    expect(service).toBeTruthy();
  });
});
