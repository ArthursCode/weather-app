import Head from 'next/head'
import React from "react";

type LayoutProps = {
    children: React.ReactChild;
    title: string
}

export function MainLayout({ children, title = 'Weather App' }: LayoutProps) {
    return (
        <>
            <Head>
                <title>Weather | {title}</title>
                <meta name="keywords" content="weather" />
                <meta name="description" content="weather app" />
                <meta charSet="utf-8" />
            </Head>
            <main>
                {children}
            </main>
        </>
    )
}