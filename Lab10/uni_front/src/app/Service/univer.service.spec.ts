import { TestBed } from '@angular/core/testing';

import { UniverService } from './univer.service';

describe('UniverService', () => {
  let service: UniverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UniverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
