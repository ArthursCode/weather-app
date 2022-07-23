import React from 'react';
import {CityNavigation} from "../components/CityNavigation";
import {MainLayout} from "../components/MainLayout";
import {CityPageProps} from "../types/pageProps";
import {WeatherInfo} from "../components/WeatherInfo";
import {customizeWeatherData} from "../helpers/customizeWeatherData";



function Berlin ({ weather }: CityPageProps) {

    return (
        <MainLayout title="Berlin">
            <>
                <CityNavigation />
                <hr />
                <WeatherInfo data={customizeWeatherData(weather)} />
            </>


        </MainLayout>
    );
}


export async function getStaticProps({store}: any) {
    try {
        // store.dispatch(fetchWeatherRequest())
        const response = await fetch(`${process.env.NEXT_PUBLIC_WEATHER_API_URL}?q=berlin&units=metric&appid=${process.env.NEXT_PUBLIC_WEATHER_API_KEY}`)
        const weather = await response.json();

        // store.dispatch(fetchWeatherSuccess(weather))

        return {
            props: {weather},
        }
    } catch (e: any) {
        console.log(e);
        // store.dispatch(fetchWeatherFailure(e.message))
        return {
            props: {},
        }
    }
}

export default Berlin