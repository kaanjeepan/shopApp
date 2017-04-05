import { ShopingAppPage } from './app.po';

describe('shoping-app App', () => {
  let page: ShopingAppPage;

  beforeEach(() => {
    page = new ShopingAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
