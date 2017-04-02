import { ReduxappPage } from './app.po';

describe('reduxapp App', () => {
  let page: ReduxappPage;

  beforeEach(() => {
    page = new ReduxappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
