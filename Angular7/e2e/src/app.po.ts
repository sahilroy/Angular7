
import {browser, by, element} from 'protractor';
import {text} from '@angular/core/src/render3';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

  setText(item, value) {
    element(by.id(item)).clear();
    return element(by.id(item)).sendKeys(value);
  }

  isValid(item) {
    return element(by.id(item)).getAttribute('class');
  }
}