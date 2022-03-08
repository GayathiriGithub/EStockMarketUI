import { TestBed } from '@angular/core/testing';
import { company } from './company';
import {HttpTestingController, HttpClientTestingModule} from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from './company.service';

describe('CompanyService', () => {
  let service: CompanyService;

  let httpMock : HttpTestingController;
  let httpClient : HttpClient;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CompanyService);
    httpMock = TestBed.get(HttpTestingController);
    httpClient = TestBed.inject(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

 /*  it('Value must be number',() => {
    company.companyTurnOver = 1000000;
    expect (company.companyTurnOver).toBeGreaterThan(2000);
  })  */
});

