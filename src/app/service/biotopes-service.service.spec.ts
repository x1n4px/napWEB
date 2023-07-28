import { TestBed } from '@angular/core/testing';

import { BiotopesServiceService } from './biotopes-service.service';

describe('BiotopesServiceService', () => {
  let service: BiotopesServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BiotopesServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
