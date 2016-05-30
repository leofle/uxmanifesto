import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { UxmanifestoAppComponent } from '../app/uxmanifesto.component';

beforeEachProviders(() => [UxmanifestoAppComponent]);

describe('App: Uxmanifesto', () => {
  it('should create the app',
      inject([UxmanifestoAppComponent], (app: UxmanifestoAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'uxmanifesto works!\'',
      inject([UxmanifestoAppComponent], (app: UxmanifestoAppComponent) => {
    expect(app.title).toEqual('uxmanifesto works!');
  }));
});
