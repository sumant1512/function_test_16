import { TestBed } from '@angular/core/testing';

import { CustomPreloadingServiceService } from './custom-preloading-service.service';

describe('CustomPreloadingServiceService', () => {
  let service: CustomPreloadingServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomPreloadingServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
