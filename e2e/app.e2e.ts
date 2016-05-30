import { UxmanifestoPage } from './app.po';

describe('uxmanifesto App', function() {
  let page: UxmanifestoPage;

  beforeEach(() => {
    page = new UxmanifestoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('uxmanifesto works!');
  });
});
