function renderForecastStrip(weather) {
    const strip = document.getElementById('forecast-strip');
    const daily = weather.daily;
    const timeZone = weather.timezone;
  
    strip.innerHTML = '';
  
    for (let i = 0; i < 5; i++) {
      const code = daily.weather_code[i];
      const info = getWeatherInfo(code);
      const high = roundTemp(daily.temperature_2m_max[i]);
      const low = roundTemp(daily.temperature_2m_min[i]);
      const dayLabel = formatForecastDay(daily.time[i], i, timeZone);
  
      const card = document.createElement('article');
      card.className = `card forecast-card${i === 0 ? ' forecast-card--active' : ''}`;
  
      card.innerHTML = `
        <p class="forecast-day">${dayLabel}</p>
        <div class="forecast-icon" aria-hidden="true">
          ${getForecastIcon(info.icon)}
        </div>
        <p class="forecast-temp">
          <span class="forecast-temp-high">${high}°</span>
          <span class="forecast-temp-sep"> / </span>
          <span class="forecast-temp-low">${low}°</span>
        </p>
      `;
  
      strip.appendChild(card);
    }
  }