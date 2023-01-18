const Utility = require('./commons/Utility');
const UtilInstance = new Utility()

async function spellCheck(context, sentence) {
  
  const appPage = context.appPage;

  await appPage.waitForFunction(UtilInstance.allTextAreasSelector);
  await appPage.type(UtilInstance.textArea, sentence);

  // After typing the status will turn to "Checking"
  // We need to wait until it is in an idle state before continuing
  await appPage.waitForFunction(UtilInstance.checkingStatusSelector);
  await appPage.waitForFunction(UtilInstance.idleStatusSelector);

  // await appPage.waitForFunction(UtilInstance.loadAllElmInExtSelector);
  await appPage.waitForFunction(UtilInstance.extractNumSpellingErrorsSelector);
  const spellingErrorFound = await appPage.evaluate(UtilInstance.extractNumSpellingErrorsSelector);

  await (await appPage.evaluateHandle(UtilInstance.grammarlyIconSelector))
    .asElement()
    .click();

  await appPage.waitForFunction(UtilInstance.acceptBtnSelector);
  await (await appPage.evaluateHandle(UtilInstance.acceptBtnSelector))
    .asElement()
    .click();

  await appPage.waitForFunction(UtilInstance.closePopupBtnSelector);
  await (await appPage.evaluateHandle(UtilInstance.closePopupBtnSelector))
    .asElement()
    .click();

  await appPage.reload({ waitUntil: ["networkidle0", "domcontentloaded"] });

  await appPage.waitForFunction(UtilInstance.allTextAreasSelector);
  const text = await appPage.evaluate(UtilInstance.extractTextAreaContentSelector);

  await appPage.evaluate(() => document.querySelector('textarea').value = "");

  return {
    text: text, 
    spellingErrorFound: spellingErrorFound
  }
}

module.exports = { spellCheck };