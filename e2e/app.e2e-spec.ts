import { Angular2DemoPage } from './app.po';

describe('angular2-demo App', function() {
  let page: Angular2DemoPage;

  beforeEach(() => {
    page = new Angular2DemoPage();
  });

  it('should display message saying \'Angular2 Demo!\'', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Angular2 Demo!');
  });
});
