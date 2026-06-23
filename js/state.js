function saveLastCity(city) {
    localStorage.setItem(STORAGE_KEY_LAST_CITY, city.trim());
  }
  
  function getLastCity() {
    return localStorage.getItem(STORAGE_KEY_LAST_CITY);
  }
  
  function clearLastCity() {
    localStorage.removeItem(STORAGE_KEY_LAST_CITY);
  }