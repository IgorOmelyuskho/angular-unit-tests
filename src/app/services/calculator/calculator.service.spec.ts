import { TestBed, fakeAsync, tick, flush } from '@angular/core/testing';

import { CalculatorService } from './calculator.service';

describe('CalculatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service).toBeTruthy();
  });

  it('should return sum', () => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    expect(service.sum(2, 5)).toBe(7);
  });

  it('should return sum async', fakeAsync((): void => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    service.asyncSum(2, 5).then(result => {
      expect(result).toBe(7);
    });

    // flush();
    tick(1000);
  }));

  it('should return sum async 2', fakeAsync((): void => {
    const service: CalculatorService = TestBed.get(CalculatorService);
    let res = null;
    service.asyncSum(2, 5).then(result => {
      res = result;
    });

    tick(500); // wait 500ms
    expect(res).toBe(null);

    tick(500); // then wait one more 500 ms
    expect(res).toBe(7);
  }));
});
