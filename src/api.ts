const API_KEY = import.meta.env.VITE_API_KEY;

export async function getWeather({ lat, lon }: { lat: number; lon: number }) {
  // Current Weather API
  const currentWeather = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`,
  );

  // 5 Day / 3 Hour Forecast API
  const forecast = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${API_KEY}`,
  );

  const current = await currentWeather.json();
  const forecastData = await forecast.json();

  return {
    current,
    forecast: forecastData,
  };
}
