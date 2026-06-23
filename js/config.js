const GEOCODING_API =
  'https://geocoding-api.open-meteo.com/v1/search';

const FORECAST_API =
  'https://api.open-meteo.com/v1/forecast';

const FORECAST_PARAMS = {
  current: [
    'temperature_2m',
    'relative_humidity_2m',
    'weather_code',
    'wind_speed_10m',
    'surface_pressure',
  ].join(','),
  daily: [
    'weather_code',
    'temperature_2m_max',
    'temperature_2m_min',
  ].join(','),
  hourly: [
    'temperature_2m',
    'weather_code',
  ].join(','),
  timezone: 'auto',
  forecast_days: 5,
};