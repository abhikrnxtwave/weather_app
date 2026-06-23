const loadingEl = document.getElementById('loading');
const errorBannerEl = document.getElementById('error-banner');
const errorMessageEl = document.getElementById('error-message');

function showLoading() {
  loadingEl.hidden = false;
}

function hideLoading() {
  loadingEl.hidden = true;
}

function showError(message) {
  errorMessageEl.textContent = message;
  errorBannerEl.hidden = false;
}

function hideError() {
  errorBannerEl.hidden = true;
  errorMessageEl.textContent = '';
}