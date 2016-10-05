import { Test01Angular2Page } from './app.po';

describe('test01-angular2 App', function() {
  let page: Test01Angular2Page;

  beforeEach(() => {
    page = new Test01Angular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
