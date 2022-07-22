import React, {useState} from "react";
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import {Weather} from "../types/weather";
import {WeatherCard} from "./WeatherCard";

type WeatherInfoProps = {
    data: Weather[]
}

export function WeatherInfo( {data}: WeatherInfoProps ) {

    const [value] = useState(new Date());

    const changeDate = (date: Date) => {
        console.log(date.getTime() / 1000)
    }

    return (
        <div className="flex p-4 justify-between items-start">
            <div>
                {data.map((el: Weather) =>
                    <WeatherCard key={Math.random()} weather={el} />
                )}
            </div>
            <Calendar onChange={changeDate} value={value} />
        </div>
    )
}

React.memo(WeatherInfo)

// https://api.openweathermap.org/data/2.5/forecast?q=yerevan&units=metric&appid=c1330edc9c89c4197393d812de0ee58b
