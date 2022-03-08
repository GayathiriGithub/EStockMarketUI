import { TestBed } from '@angular/core/testing';

import { AddstockService } from './addstock.service';

describe('AddstockService', () => {
  let service: AddstockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddstockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
