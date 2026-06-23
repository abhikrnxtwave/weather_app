const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const clearCityBtn = document.getElementById('clear-city');

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

    saveLastCity(trimmed);
    searchInput.value = trimmed;
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

if (clearCityBtn) {
  clearCityBtn.addEventListener('click', resetToEmptyState);
}

document.addEventListener('DOMContentLoaded', () => {
  const savedCity = getLastCity();

  if (savedCity) {
    searchInput.value = savedCity;
    loadWeatherForCity(savedCity);
  } else {
    resetToEmptyState();
  }
});