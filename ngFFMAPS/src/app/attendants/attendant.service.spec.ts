import { TestBed } from '@angular/core/testing';

import { AttendantService } from './attendant.service';

describe('AttendantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AttendantService = TestBed.get(AttendantService);
    expect(service).toBeTruthy();
  });
});
