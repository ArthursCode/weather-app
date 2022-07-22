import Link from 'next/link'
import {MainLayout} from '../components/MainLayout'
import {CityNavigation} from "../components/CityNavigation";
import React from "react";

export default function ErrorPage() {
    return (
        <MainLayout title={'404'}>
            <>
                <CityNavigation />
                <h1>Error 404</h1>
                <p>Please <Link href={'/'}><a>go back</a></Link> to safety</p>
            </>
        </MainLayout>
    )
}