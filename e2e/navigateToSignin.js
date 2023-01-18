const Utility = require('./commons/Utility');
const UtilInstance = new Utility()

async function navigateToSignin( context ) {

  const appPage = context.appPage;
  const browser = context.browser;

  appPage.bringToFront();

  await appPage.waitForFunction(UtilInstance.grammarlyIconSelector);
  const grammarlyIcon = await (await appPage.evaluateHandle(UtilInstance.grammarlyIconSelector))
    .asElement();

  // Grammarly icon can be buggy and double click is needed
  await appPage.waitForTimeout(1000);
  await grammarlyIcon.click();
  await appPage.waitForTimeout(1000);
  await grammarlyIcon.click();

  await appPage.waitForFunction(UtilInstance.findLoginBtnFromPopupSelector);
  await appPage.waitForTimeout(1000);

  await (await appPage.evaluateHandle(UtilInstance.findLoginBtnFromPopupSelector))
    .asElement()
    .click()

  return await (await browser.waitForTarget(target => target.opener() === appPage.target())).page();
}

module.exports = { navigateToSignin };