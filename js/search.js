const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');

async function loadWeatherForCity(city) {
  const trimmed = city.trim();

  if (!trimmed) {
    showError('Please enter a city name.');
    return;
  }

  hideError();
  showLoading();

  try {
    const result = await getWeatherForCity(trimmed);
    renderCurrentWeather(result.location, result.weather);
    renderForecastStrip(result.weather);
    renderHourlyInsights(result.weather);
  } catch (error) {
    console.error(error);
    showError(error.message || 'Something went wrong. Please try again.');
  } finally {
    hideLoading();
  }
}

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  await loadWeatherForCity(searchInput.value);
});

// Load default city on page open
document.addEventListener('DOMContentLoaded', () => {
  searchInput.value = DEFAULT_CITY;
  loadWeatherForCity(DEFAULT_CITY);
});