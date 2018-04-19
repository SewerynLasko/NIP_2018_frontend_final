import { NgApiTrainingPage } from './app.po';

describe('ng-api-training App', () => {
  let page: NgApiTrainingPage;

  beforeEach(() => {
    page = new NgApiTrainingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
