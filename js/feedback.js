const loadingEl = document.getElementById('loading');
const errorBannerEl = document.getElementById('error-banner');
const errorMessageEl = document.getElementById('error-message');

function setSearchDisabled(disabled) {
  const input = document.getElementById('search-input');
  const button = document.querySelector('.search-button');

  if (input) input.disabled = disabled;
  if (button) button.disabled = disabled;
}

function showLoading() {
  if (loadingEl) loadingEl.hidden = false;
  setSearchDisabled(true);
}

function hideLoading() {
  if (loadingEl) loadingEl.hidden = true;
  setSearchDisabled(false);
}

function showError(message) {
  if (errorMessageEl) errorMessageEl.textContent = message;
  if (errorBannerEl) errorBannerEl.hidden = false;
}

function hideError() {
  if (errorBannerEl) errorBannerEl.hidden = true;
  if (errorMessageEl) errorMessageEl.textContent = '';
}