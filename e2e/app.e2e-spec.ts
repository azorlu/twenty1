import { Twenty1Page } from './app.po';

describe('twenty1 App', () => {
  let page: Twenty1Page;

  beforeEach(() => {
    page = new Twenty1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
