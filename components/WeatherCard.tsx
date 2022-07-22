import React from "react";
import 'react-calendar/dist/Calendar.css';
import {Weather} from "../types/weather";

type WeatherCardProps = {
    weather: Weather
}

export function WeatherCard({weather}: WeatherCardProps ) {

    return (
        <figure className="mb-8 rounded-xl p-8 shadow-lg">
            <img className="w-24 h-24 rounded-full mx-auto" src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt={'icon'} />
            <div className="pt-6 space-y-4">
                <blockquote>
                    <p className="text-lg font-medium">
                        Date: {weather.date}
                    </p>
                    <p className="text-lg font-medium">
                        Temperature: {weather.temperature} C
                    </p>
                    <p className="text-lg font-medium">
                        Wind: {weather.wind}
                    </p>
                    <p className="text-lg font-medium">
                        Humidity: {weather.humidity}
                    </p>
                </blockquote>
            </div>
        </figure>
    )
}

React.memo(WeatherCard);
