import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { UxdataService } from './uxdata.service';

describe('Uxdata Service', () => {
  beforeEachProviders(() => [UxdataService]);

  it('should ...',
      inject([UxdataService], (service: UxdataService) => {
    expect(service).toBeTruthy();
  }));
});
