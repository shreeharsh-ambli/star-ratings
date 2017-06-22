import { StarRatingsPage } from './app.po';

describe('star-ratings App', () => {
  let page: StarRatingsPage;

  beforeEach(() => {
    page = new StarRatingsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
