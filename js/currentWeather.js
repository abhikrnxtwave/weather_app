function renderCurrentWeather(location, weather) {
    const current = weather.current;
    const units = weather.current_units;
    const timeZone = weather.timezone;
  
    const card = document.getElementById('current-weather');
    const cityEl = document.getElementById('weather-city');
    const dateTextEl = document.getElementById('weather-date-text');
    const tempEl = document.getElementById('weather-temp');
    const tempValueEl = document.getElementById('weather-temp-value');
    const conditionIconEl = document.getElementById('weather-condition-icon');
    const conditionLabelEl = document.getElementById('weather-condition-label');
    const humidityEl = document.getElementById('stat-humidity');
    const windEl = document.getElementById('stat-wind');
    const pressureEl = document.getElementById('stat-pressure');
  
    const temp = roundTemp(current.temperature_2m);
    const weatherInfo = getWeatherInfo(current.weather_code);
  
    // City + country
    cityEl.textContent = `${location.name}, ${location.country}`;
  
    // Date below city name
    dateTextEl.textContent = formatCurrentDate(current.time, timeZone);
  
    // Temperature + accent class
    tempValueEl.textContent = temp;
    tempEl.classList.remove('weather-temp--cold', 'weather-temp--mild', 'weather-temp--warm');
    tempEl.classList.add(getTempAccentClass(temp));
  
    // Condition icon + label from WMO code
    conditionIconEl.innerHTML = getWeatherIcon(weatherInfo.icon);
    conditionLabelEl.textContent = weatherInfo.label;
  
    // Stats
    humidityEl.textContent = `${current.relative_humidity_2m}%`;
    windEl.textContent = `${Math.round(current.wind_speed_10m)} ${units.wind_speed_10m}`;
    pressureEl.textContent = `${Math.round(current.surface_pressure)} ${units.surface_pressure}`;
  
    // Show card
    card.hidden = false;
  }