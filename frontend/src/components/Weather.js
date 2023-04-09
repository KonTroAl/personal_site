import React from "react";
import logo_weather_ru_indoor from "./images/logo_weather_ru_indoor.svg"

const WeatherItem = ({ weather }) => {

    return (
        <div class="card weather_card" >
            <div class="card-body">
                <a href="#" data-hystmodal="#myModal">
                    <h5 class="card-title">{weather.city}</h5>
                </a>
                <div class="hystmodal" id="myModal" aria-hidden="true">
                    <div class="hystmodal__wrap">
                        <div class="hystmodal__window" role="dialog" aria-modal="true">
                            <button data-hystclose class="hystmodal__close">Close</button>
                            <h1>Hello!</h1>
                        </div>
                    </div>
                </div>

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