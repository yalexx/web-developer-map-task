import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display title Yanko Aleksandrov', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Yanko Aleksandrov');
  });

  it('should display subtitle Task Github', () => {
    page.navigateTo();
    expect(page.getSubtitleText()).toContain('Task Github');
  });

  it('should display Welcome!', () => {
    page.navigateTo();
    expect(page.getHistoryText()).toContain('Welcome!');
  });

  it('should click on Car1 button then on location and display correct history message', () => {
    page.navigateTo();
    page.getCar1Button().click();
    page.getLocation1Button().click();
    expect(page.getHistoryText()).toContain('Car1 was navigated from Plovdiv to Haskovo');
  });

});
