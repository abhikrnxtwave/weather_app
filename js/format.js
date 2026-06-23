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



  function formatForecastDay(isoDate, index, timeZone) {
    if (index === 0) return 'TODAY';
  
    return new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
      timeZone,
    })
      .format(new Date(isoDate))
      .toUpperCase();
    // "TUE", "WED", ...
  }
  
  function formatHourTime(isoString, timeZone) {
    return new Intl.DateTimeFormat('en-GB', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false,
      timeZone,
    }).format(new Date(isoString));
    // "14:00"
  }
  
  function getTodayHourlyIndices(weather) {
    const { hourly, current } = weather;
    const today = current.time.split('T')[0];
    const currentMs = new Date(current.time).getTime();
  
    const todayIndices = [];
  
    for (let i = 0; i < hourly.time.length; i++) {
      if (hourly.time[i].startsWith(today)) {
        todayIndices.push(i);
      }
    }
  
    let startIndex = todayIndices.find(
      (i) => new Date(hourly.time[i]).getTime() >= currentMs
    );
  
    if (startIndex === undefined) {
      startIndex = todayIndices[todayIndices.length - 1];
    }
  
    const selected = [];
  
    for (let i = startIndex; selected.length < 6 && i < hourly.time.length; i++) {
      if (hourly.time[i].startsWith(today)) {
        selected.push(i);
      }
    }
  
    return selected;
  }