const weather = new Weather();
weather.getWeather('London', 'UK').then(response => {
    console.log(response);
}).catch(err => console.log(err))