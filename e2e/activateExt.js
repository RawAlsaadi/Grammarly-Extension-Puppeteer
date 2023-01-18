const Utility = require('./commons/Utility');
const UtilInstance = new Utility();

async function signin(context) {

  const browser = context.browser;

  const pages = await browser.pages();
  const extPage = pages[pages.length - 1];

  await extPage.waitForSelector(UtilInstance.googleSigninBtn);
  await extPage.click(UtilInstance.googleSigninBtn);

  await extPage.waitForSelector(UtilInstance.email, { visible: true });
  await extPage.type(UtilInstance.email, process.env.USERNAME);

  await extPage.waitForSelector(UtilInstance.nextButton);
  await extPage.click(UtilInstance.nextButton);

  await extPage.waitForSelector(UtilInstance.password, { visible: true });
  await extPage.type(UtilInstance.password, process.env.PASSWORD);

  await extPage.waitForSelector(UtilInstance.nextButtonPwd);
  await extPage.click(UtilInstance.nextButtonPwd);

  return extPage;
}

async function checkExtActivated(context) {

  const appPage = context.appPage;

  await appPage.waitForFunction(UtilInstance.grammarlyIconSelector);
  await (await appPage.evaluateHandle(UtilInstance.grammarlyIconSelector))
    .asElement()
    .click();

  await appPage.waitForFunction(UtilInstance.successImgPopupSelector);
  const successImage = !!await appPage.evaluateHandle(UtilInstance.successImgPopupSelector);

  await appPage.waitForFunction(UtilInstance.closePopupBtnSelector);
  await (await appPage.evaluateHandle(UtilInstance.closePopupBtnSelector))
    .asElement()
    .click();
  
  return successImage;
}

module.exports = { signin, checkExtActivated };