function showWeatherSections() {
    document.getElementById('empty-state').hidden = true;
    document.getElementById('forecast-strip').hidden = false;
    document.getElementById('hourly-insights').hidden = false;
  }
  
  function resetToEmptyState() {
    clearLastCity();
    hideError();
  
    const searchInput = document.getElementById('search-input');
    const weatherCard = document.getElementById('current-weather');
    const forecastStrip = document.getElementById('forecast-strip');
    const hourlyInsights = document.getElementById('hourly-insights');
    const hourlyList = document.getElementById('hourly-list');
    const emptyState = document.getElementById('empty-state');
    const clearBtn = document.getElementById('clear-city');
  
    if (searchInput) searchInput.value = '';
  
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