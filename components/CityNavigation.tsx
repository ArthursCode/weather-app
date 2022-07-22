import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

export function CityNavigation() {

    const router = useRouter();

    const anchorStyle = "text-blue-500 hover:text-blue-800"


    return (
        <>
            <nav>
                <ul className="flex p-4 justify-between">
                    <li>
                        <Link href={'/new-york'}><a className={`${anchorStyle} ${router.pathname == '/new-york' ? 'underline' : ''}`}>New York</a></Link>
                    </li>
                    <li>
                        <Link href="/london"><a className={`${anchorStyle} ${router.pathname == '/london' ? 'underline' : ''}`}>London</a></Link>
                    </li>
                    <li>
                        <Link href="/berlin"><a className={`${anchorStyle} ${router.pathname == '/berlin' ? 'underline' : ''}`}>Berlin</a></Link>
                    </li>
                    <li>
                        <Link href="/paris"><a className={`${anchorStyle} ${router.pathname == '/paris' ? 'underline' : ''}`}>Paris</a></Link>
                    </li>
                    <li>
                        <Link href="/tokyo"><a className={`${anchorStyle} ${router.pathname == '/tokyo' ? 'underline' : ''}`}>Tokyo</a></Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}