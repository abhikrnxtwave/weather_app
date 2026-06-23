const WMO_CODES = {
    0:  { label: 'Clear Sky',           icon: 'sun' },
    1:  { label: 'Mainly Clear',        icon: 'sun' },
    2:  { label: 'Partly Cloudy',       icon: 'cloudSun' },
    3:  { label: 'Overcast',            icon: 'cloud' },
    45: { label: 'Foggy',               icon: 'cloud' },
    48: { label: 'Depositing Rime Fog', icon: 'cloud' },
    51: { label: 'Light Drizzle',       icon: 'cloudRain' },
    53: { label: 'Drizzle',             icon: 'cloudRain' },
    55: { label: 'Heavy Drizzle',       icon: 'cloudRain' },
    61: { label: 'Light Rain',          icon: 'cloudRain' },
    63: { label: 'Rain',                icon: 'cloudRain' },
    65: { label: 'Heavy Rain',          icon: 'cloudRain' },
    71: { label: 'Light Snow',          icon: 'cloud' },
    73: { label: 'Snow',                icon: 'cloud' },
    75: { label: 'Heavy Snow',          icon: 'cloud' },
    80: { label: 'Light Showers',       icon: 'cloudRain' },
    81: { label: 'Showers',             icon: 'cloudRain' },
    82: { label: 'Heavy Showers',       icon: 'cloudRain' },
    95: { label: 'Thunderstorm',        icon: 'cloudRain' },
  };
  
  function getWeatherInfo(code) {
    return WMO_CODES[code] || { label: 'Unknown', icon: 'cloud' };
  }