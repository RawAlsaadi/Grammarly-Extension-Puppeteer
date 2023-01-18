module.exports = class Utility {
  constructor() {
    // Selectors
    this.googleSigninBtn = `button[data-qa="btnGoogleAuth"]`
    this.email = `input[type="email"]`
    this.nextButton = `div[id="identifierNext"]`
    this.password = `input[type="password"]`
    this.nextButtonPwd = `div[id="passwordNext"]`
    this.textArea = `textarea[aria-label="Source text"]`

    // Query selectors
    this.extractTextAreaContentSelector = `document.querySelector('textarea').textContent`
    this.allTextAreasSelector = `document.querySelectorAll('textarea')`
    this.grammarlyIconSelector = `document.querySelector('grammarly-extension').shadowRoot.querySelector('[data-grammarly-part="gbutton"]')`
    this.successImgPopupSelector = `document.querySelector('grammarly-mirror').shadowRoot.querySelector('img[alt="success_report_image"]')`
    this.closePopupBtnSelector = `document.querySelector('grammarly-mirror').shadowRoot.querySelector('[data-name="close"]')`
    this.checkingStatusSelector = `document.querySelector('grammarly-extension').shadowRoot.querySelector('[data-gbutton-checking-status="checking"]')`
    this.idleStatusSelector = `document.querySelector('grammarly-extension').shadowRoot.querySelector('[data-gbutton-checking-status="idle"]')`
    this.loadAllElmInExtSelector = `document.querySelector('grammarly-extension').shadowRoot.querySelectorAll('div')`
    this.extractNumSpellingErrorsSelector = `Array.from(document.querySelector("grammarly-extension").shadowRoot.querySelectorAll('div')).find(el => el.textContent === '1').textContent`
    this.acceptBtnSelector = `document.querySelector("grammarly-mirror").shadowRoot.querySelector('[data-name="button:accept"]')`
    this.popupFooterSelector = `document.querySelector('grammarly-mirror').shadowRoot.querySelector('[data-grammarly-part="gbutton-popups"]').querySelectorAll('footer')`
    this.findLoginBtnFromPopupSelector = `Array.from(document.querySelector('grammarly-mirror').shadowRoot.querySelector('footer').querySelectorAll('span')).find(el => el.textContent === 'Log in')`
  }
}