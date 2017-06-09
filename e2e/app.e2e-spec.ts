import { WebAngular4Page } from './app.po';

describe('web-angular4 App', () => {
  let page: WebAngular4Page;

  beforeEach(() => {
    page = new WebAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
