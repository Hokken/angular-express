import { FrontEndTechnicalTestAngular4Page } from './app.po';

describe('front-end-technical-test-angular4 App', () => {
  let page: FrontEndTechnicalTestAngular4Page;

  beforeEach(() => {
    page = new FrontEndTechnicalTestAngular4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
