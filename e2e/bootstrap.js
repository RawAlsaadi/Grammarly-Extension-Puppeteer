const puppeteer = require('puppeteer');

async function bootstrap(options = {}) {
  const { devtools = false, slowMo = 15, appUrl } = options;
  const browser = await puppeteer.launch({
    headless: false,
    devtools,
    args: [
      '--disable-extensions-except=./grammarly-chrome-extension',
      '--load-extension=./grammarly-chrome-extension',
    ],
    ...(slowMo && { slowMo }),
  });

  const appPage = await browser.newPage();
  await appPage.goto(appUrl, { waitUntil: 'load' });

  // Default Extension page is closed because authentication is buggy
  const pages = await browser.pages()
  const extPage = pages[pages.length-1];
  extPage.close();

  return {
    appPage,
    browser
  };
}

module.exports = { bootstrap };