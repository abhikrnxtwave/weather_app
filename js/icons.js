const WEATHER_ICONS = {
    sun: `<svg class="icon icon--condition" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="4"/>
      <path d="M12 2v2"/><path d="M12 20v2"/>
      <path d="M4.93 4.93l1.41 1.41"/><path d="M17.66 17.66l1.41 1.41"/>
      <path d="M2 12h2"/><path d="M20 12h2"/>
      <path d="M6.34 17.66l-1.41 1.41"/><path d="M19.07 4.93l-1.41 1.41"/>
    </svg>`,
  
    cloudSun: `<svg class="icon icon--condition" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M12 2v2"/>
      <path d="m4.93 4.93 1.41 1.41"/>
      <path d="M20 12h2"/>
      <path d="m19.07 4.93-1.41 1.41"/>
      <path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"/>
      <path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"/>
    </svg>`,
  
    cloud: `<svg class="icon icon--condition" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
    </svg>`,
  
    cloudRain: `<svg class="icon icon--condition" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
      viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
      stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242"/>
      <path d="M16 14v6"/><path d="M8 14v6"/><path d="M12 16v6"/>
    </svg>`,
  };
  
  function getWeatherIcon(key) {
    return WEATHER_ICONS[key] || WEATHER_ICONS.cloud;
  }

  function getForecastIcon(key) {
    return getWeatherIcon(key)
      .replace('width="24" height="24"', 'width="28" height="28"')
      .replace('icon--condition', 'icon--forecast');
  }