import {Weather} from "../types/weather";

export const customizeWeatherData = (data: any) => {
    let weatherData: Weather[] = [];
    data.list.map((el: any) => {
        weatherData.push({
            id: el.weather[0].id,
            date: el.dt_txt,
            icon: el.weather[0].icon,
            temperature: el.main.temp,
            humidity: el.main.humidity,
            wind: el.wind.speed
        })
    });

    return weatherData;
}