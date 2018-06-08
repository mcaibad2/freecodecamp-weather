class Weather {
    constructor(city) {
        this.apiKey = '849099f4d39f43deaa3dbec6290923dc';
        this.city = 'Athens';
        if (city) {
            this.city = city;
        }
    }

    async getWeather() {
        const weatherResponse = await fetch(`https://api.weatherbit.io/v2.0/current?city=${this.city}&key=${this.apiKey}`);
        const response = await weatherResponse.json();
        return response;
    }

    changeLocation(city) {
        this.city = city;
    }
}

export const weather = new Weather();