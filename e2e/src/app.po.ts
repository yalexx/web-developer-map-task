import {browser, by, element} from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getTitleText() {
    return element(by.css('h1')).getText();
  }

  getSubtitleText() {
    return element(by.css('h3')).getText();
  }

  getHistoryText() {
    return element(by.css('app-history ul')).getText();
  }

  getCar1Button() {
    return element(by.cssContainingText('button', 'Car1'));
  }

  getLocation1Button() {
    return element(by.cssContainingText('button', 'Haskovo'));
  }

}
