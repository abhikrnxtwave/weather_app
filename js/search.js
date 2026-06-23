const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const city = searchInput.value.trim();

  if (!city) {
    showError('Please enter a city name.');
    return;
  }

  hideError();
  showLoading();

  try {
    const result = await getWeatherForCity(city);

    console.log('Location:', result.location);
    console.log('Weather:', result.weather);
    // M3: pass result to render functions
  } catch (error) {
    console.error(error);
    showError(error.message || 'Something went wrong. Please try again.');
  } finally {
    hideLoading();
  }
});