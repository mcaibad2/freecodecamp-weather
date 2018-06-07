class Weather {

    constructor() {
        this.apiKey = '849099f4d39f43deaa3dbec6290923dc';
    }

    async getWeather(city, countryCode) {
        const weatherResponse = await fetch(`https://api.weatherbit.io/v2.0/current?city=Raleigh,NC&key=${this.apiKey}`);
        const weather = await weatherResponse.json();
        return weather
      }
}