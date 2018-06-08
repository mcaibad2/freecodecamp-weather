class UI {
    showWeather(data) {
        document.getElementById('city-name').textContent = data.city_name;
        document.getElementById('description').textContent = data.weather.description;
        document.getElementById('temperature').textContent = `${data.temp} C`;
        document.getElementById('wind').textContent = `Wind: From the ${data.wind_cdir} at ${data.wind_spd} m/s`
        document.getElementById('feels-like').textContent = `Feels like: ${data.app_temp} C`;
        document.getElementById('dewpoint').textContent = `Dew point: ${data.dewpt} C`;
        document.getElementById('humidity').textContent = `Relative Humidity: ${data.rh} %`;
    }
}

export const ui = new UI();