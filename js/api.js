async function geocodeCity(cityName) {
    const url = new URL(GEOCODING_API);
    url.searchParams.set('name', cityName.trim());
    url.searchParams.set('count', '1');
    url.searchParams.set('language', 'en');
    url.searchParams.set('format', 'json');
  
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error('Network error while looking up the city.');
    }
  
    const data = await response.json();
  
    if (!data.results || data.results.length === 0) {
      throw new Error(`City "${cityName}" not found. Try another spelling.`);
    }
  
    return data.results[0];
    // { name, latitude, longitude, country, ... }
  }
  
  async function fetchWeather(latitude, longitude) {
    const url = new URL(FORECAST_API);
    url.searchParams.set('latitude', latitude);
    url.searchParams.set('longitude', longitude);
    url.searchParams.set('current', FORECAST_PARAMS.current);
    url.searchParams.set('daily', FORECAST_PARAMS.daily);
    url.searchParams.set('hourly', FORECAST_PARAMS.hourly);
    url.searchParams.set('timezone', FORECAST_PARAMS.timezone);
    url.searchParams.set('forecast_days', FORECAST_PARAMS.forecast_days);
  
    const response = await fetch(url);
  
    if (!response.ok) {
      throw new Error('Failed to fetch weather data.');
    }
  
    return response.json();
  }
  
  async function getWeatherForCity(cityName) {
    const location = await geocodeCity(cityName);
    const weather = await fetchWeather(
      location.latitude,
      location.longitude
    );
  
    return { location, weather };
  }