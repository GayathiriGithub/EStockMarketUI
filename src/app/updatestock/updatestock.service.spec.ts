import { TestBed } from '@angular/core/testing';

import { UpdatestockService } from './updatestock.service';

describe('UpdatestockService', () => {
  let service: UpdatestockService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdatestockService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
