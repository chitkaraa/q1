// OpenWeatherMap API key (you can move this to a more secure place later)
const apiKey = "enter your api key"
const form = document.getElementById('search-form');
const inputCity = document.getElementById('cityName');
const container = document.getElementById('container');

function kelvinToCelsius(k) {
    return (k - 273.15).toFixed(1);
}

function displayWeather(data) {
    container.innerHTML = '';

    const title = document.createElement('h2');
    title.textContent = `${data.name}, ${data.sys.country}`;
    container.appendChild(title);

    const temp = document.createElement('p');
    temp.innerHTML = `<strong>Temperature:</strong> ${kelvinToCelsius(data.main.temp)} °C`;
    container.appendChild(temp);

    const desc = document.createElement('p');
    desc.innerHTML = `<strong>Conditions:</strong> ${data.weather[0].description}`;
    container.appendChild(desc);

    const icon = document.createElement('img');
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    icon.alt = data.weather[0].description;
    icon.className = 'weather-icon';
    container.appendChild(icon);

    const humidity = document.createElement('p');
    humidity.innerHTML = `<strong>Humidity:</strong> ${data.main.humidity}%`;
    container.appendChild(humidity);

    const wind = document.createElement('p');
    wind.innerHTML = `<strong>Wind:</strong> ${data.wind.speed} m/s`;
    container.appendChild(wind);
}

function showError(message) {
    container.innerHTML = `<p class="error">${message}</p>`;
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const city = inputCity.value.trim();
    if (!city) {
        showError('Please enter a city name.');
        return;
    }

    container.innerHTML = '<p>Loading...</p>';
    axios.get(`https://api.openweathermap.org/data/2.5/weather`, {
        params: {
            q: city,
            appid: apiKey
        }
    })
    .then(response => displayWeather(response.data))
    .catch(err => {
        console.error(err);
        if (err.response && err.response.status === 404) {
            showError('City not found. Try another name.');
        } else {
            showError('Could not fetch weather data. Check your connection.');
        }
    });
});

// Optionally show a default city's weather on load
window.addEventListener('DOMContentLoaded', () => {
    inputCity.value = '';
});