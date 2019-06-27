
import {AppPage} from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Payment Detail Register');
  });

  it('card number should be valid when 16 numbers are entered', () => {
    page.setText('txtCardNumber', '1111111111111111');
    expect(page.isValid('txtCardNumber')).toContain('ng-valid');
  });
  
});