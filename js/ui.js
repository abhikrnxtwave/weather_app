function showWeatherSections() {
    document.getElementById('empty-state').hidden = true;
    document.getElementById('current-weather-section').hidden = false;
    document.getElementById('forecast-strip').hidden = false;
    document.getElementById('hourly-insights').hidden = false;
  }
  
  function resetToEmptyState() {
    clearLastCity();
    hideError();
  
    const searchInput = document.getElementById('search-input');
    const weatherSection = document.getElementById('current-weather-section');
    const weatherCard = document.getElementById('current-weather');
    const forecastStrip = document.getElementById('forecast-strip');
    const hourlyInsights = document.getElementById('hourly-insights');
    const hourlyList = document.getElementById('hourly-list');
    const emptyState = document.getElementById('empty-state');
    const clearBtn = document.getElementById('clear-city');
  
    // Clear search
    if (searchInput) searchInput.value = '';
  
    // Clear weather card content
    const cityEl = document.getElementById('weather-city');
    const dateTextEl = document.getElementById('weather-date-text');
    const tempValueEl = document.getElementById('weather-temp-value');
    const tempEl = document.getElementById('weather-temp');
    const conditionIconEl = document.getElementById('weather-condition-icon');
    const conditionLabelEl = document.getElementById('weather-condition-label');
    const humidityEl = document.getElementById('stat-humidity');
    const windEl = document.getElementById('stat-wind');
    const pressureEl = document.getElementById('stat-pressure');
  
    if (cityEl) cityEl.textContent = '';
    if (dateTextEl) dateTextEl.textContent = '';
    if (tempValueEl) tempValueEl.textContent = '';
    if (tempEl) tempEl.classList.remove('weather-temp--cold', 'weather-temp--mild', 'weather-temp--warm');
    if (conditionIconEl) conditionIconEl.innerHTML = '';
    if (conditionLabelEl) conditionLabelEl.textContent = '';
    if (humidityEl) humidityEl.textContent = '—';
    if (windEl) windEl.textContent = '—';
    if (pressureEl) pressureEl.textContent = '—';
  
    // Hide weather sections
    if (weatherSection) weatherSection.hidden = true;
    if (weatherCard) weatherCard.hidden = true;
    if (forecastStrip) {
      forecastStrip.innerHTML = '';
      forecastStrip.hidden = true;
    }
    if (hourlyList) hourlyList.innerHTML = '';
    if (hourlyInsights) hourlyInsights.hidden = true;
    if (emptyState) emptyState.hidden = false;
    if (clearBtn) clearBtn.hidden = true;
  }