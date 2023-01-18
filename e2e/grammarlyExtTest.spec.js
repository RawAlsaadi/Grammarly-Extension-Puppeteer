const { bootstrap } = require('./bootstrap');
const { navigateToSignin } = require('./navigateToSignin')
const { signin, checkExtActivated } = require('./activateExt');
const { spellCheck } = require('./spellCheck');

require('dotenv').config()

describe('Test Grammarly Chrome Extension', () => {

  let context;

  beforeAll(async () => {
    // Tests are conducted on Google Translate
    context = await bootstrap({ appUrl: 'https://translate.google.ca/' });;
  });

  describe('Navigate To', () => {

    test('Sign In Page', async () => {

      const signinPage = await navigateToSignin(context);
      expect(signinPage.url()).toBe("https://www.grammarly.com/signin?utm_medium=internal&utm_source=signinHook&fromExtension=true")

    });
  });

  describe('Authentication', () => {

    test('using Gmail and Re-direct to Main Page', async () => {

      const extPage = await signin(context);
      await extPage.waitForTimeout(5000);
      expect(extPage.isClosed()).toBe(true);

    });

    test('is Successful Should be Active and Ready To Use', async () => {

      const successImage = await checkExtActivated(context);
      expect(successImage).toBe(true);

    });
  });

  describe('Mispelled English Words', () => {

    test('Should be Corrected ', async () => {

      const mapWrongToExpectedWord = {
        'noice ': 'nice ',
        'beutiful ': 'beautiful ',
        'werm ': 'warm '
      }

      for (badWord in mapWrongToExpectedWord) {

        const misspelledSentence = 'The weather is ' + badWord;
        const spellingAnalysis = await spellCheck(context, misspelledSentence);

        expect(spellingAnalysis.spellingErrorFound).toBe('1');
        expect(spellingAnalysis.text).toBe('The weather is ' + mapWrongToExpectedWord[badWord]);

      }

    });
  })

  describe('Mispelled Foreign Words', () => {

    test('Cannot be Reliably Corrected', async () => {

      const mapWrongToExpectedForeignWord = {
        'ziu ': 'ziua ',
        'searuh ': 'seara '
      }

      for (badWord in mapWrongToExpectedForeignWord) {

        const misspelledSentence = 'Bună ' + badWord;
        const spellingAnalysis = await spellCheck(context, misspelledSentence);

        expect(spellingAnalysis.spellingErrorFound).toBe('1');
        expect(spellingAnalysis.text).not.toBe('Bună ' + mapWrongToExpectedForeignWord[badWord]);

      }

    });
  })
});