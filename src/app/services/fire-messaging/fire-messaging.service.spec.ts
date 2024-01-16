import { TestBed } from '@angular/core/testing';

import { FireMessagingService } from './fire-messaging.service';

describe('FireMessagingService', () => {
  let service: FireMessagingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FireMessagingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
