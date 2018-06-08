const weather = new Weather();
const ui = new UI();

document.addEventListener('DOMContentLoaded', function (e) {
    console.log("DOM fully loaded and parsed");
    getWeather();
})

document.getElementById('w-change-btn').addEventListener('click', function (e) {
    console.log("Change location");
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    // Change location
    weather.changeLocation(city);

    // Get and display weather
    getWeather();

    // Close modal
    $('#locModal').modal('hide');

    e.preventDefault();
})

function getWeather() {
    weather.getWeather().then(response => {
        ui.showWeather(response.data[0]);
    }).catch(err => console.log(err));
}