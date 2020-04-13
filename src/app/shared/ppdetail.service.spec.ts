import { TestBed } from '@angular/core/testing';

import { PPDetailService } from './ppdetail.service';

describe('PPDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PPDetailService = TestBed.get(PPDetailService);
    expect(service).toBeTruthy();
  });
});
