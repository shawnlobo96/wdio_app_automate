var assert = require('assert');

describe('OMA-E2E-UC-003: Member', () => {
  it('Can Login With Registered Email Address.', () => {
    // WebViewScreen.waitForWebViewContextLoaded();
    // WebViewScreen.switchToContext(CONTEXT_REF.WEBVIEW);

    browser.context("WEBVIEW_com.oneclickbusiness.mobile")
    const footer = $('.footer');
    footer.waitForVisible()
    const getStartedButton = footer.$('.button');
    getStartedButton.click();
    const emailInput = $('#email .native-input');
    emailInput.waitForVisible()
    // browser.isElementDisplayed()
    browser.pause(10000)
  });
});
