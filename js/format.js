function formatCurrentDate(isoString, timeZone) {
    const date = new Date(isoString);
  
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'long',
      month: 'short',
      day: 'numeric',
      timeZone,
    }).format(date);
    // e.g. "Monday, Oct 24"
  }
  
  function getTempAccentClass(tempC) {
    if (tempC < 10) return 'weather-temp--cold';
    if (tempC > 24) return 'weather-temp--warm';
    return 'weather-temp--mild';
  }
  
  function roundTemp(value) {
    return Math.round(value);
  }