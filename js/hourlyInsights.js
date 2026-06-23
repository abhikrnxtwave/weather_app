function renderHourlyInsights(weather) {
    const list = document.getElementById('hourly-list');
    const { hourly } = weather;
    const timeZone = weather.timezone;
    const indices = getTodayHourlyIndices(weather);
  
    list.innerHTML = '';
  
    indices.forEach((i) => {
      const code = hourly.weather_code[i];
      const info = getWeatherInfo(code);
      const temp = hourly.temperature_2m[i].toFixed(1);
      const time = formatHourTime(hourly.time[i], timeZone);
  
      const row = document.createElement('div');
      row.className = 'hourly-item';
  
      row.innerHTML = `
        <span class="hourly-time">${time}</span>
        <div class="hourly-label-wrap">
          ${getWeatherIcon(info.icon).replace('icon--condition', 'icon')}
          <span class="hourly-label">${info.label}</span>
        </div>
        <span class="hourly-temp">${temp}°C</span>
      `;
  
      list.appendChild(row);
    });
  }