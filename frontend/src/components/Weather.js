import React from "react";
import logo_weather_ru_indoor from "./images/logo_weather_ru_indoor.svg"

const WeatherItem = ({ weather }) => {
    return (
        <div class="card weather_card" >
            <div class="card-body">
                <h5 class="card-title">{weather.city}</h5>
                <img src={weather.icon}></img>
                <p class="card-text">Сurrent temperature is {weather.temp} </p>
                <a href="https://yandex.ru/pogoda/" target="_blank">
                    <img src={logo_weather_ru_indoor}></img>
                </a>
            </div>
        </div>
    )
}

export default WeatherItem