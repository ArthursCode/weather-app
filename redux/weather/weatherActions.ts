import {
    FETCH_WEATHER_REQUEST,
    FETCH_WEATHER_SUCCESS,
    FETCH_WEATHER_FAILURE
} from './weatherTypes'
import {Weather} from "../../types/weather";


export const fetchWeatherRequest = () => {
    return {
        type: FETCH_WEATHER_REQUEST
    }
}

export const fetchWeatherSuccess = (weather: Weather[]) => {
    return {
        type: FETCH_WEATHER_SUCCESS,
        payload: weather
    }
}

export const fetchWeatherFailure = (error: any) => {
    return {
        type: FETCH_WEATHER_FAILURE,
        payload: error
    }
}