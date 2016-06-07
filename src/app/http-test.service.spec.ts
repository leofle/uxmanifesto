import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { HttpTestService } from './http-test.service';

describe('HttpTest Service', () => {
  beforeEachProviders(() => [HttpTestService]);

  it('should ...',
      inject([HttpTestService], (service: HttpTestService) => {
    expect(service).toBeTruthy();
  }));
});
