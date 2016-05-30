export class UxmanifestoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('uxmanifesto-app h1')).getText();
  }
}
