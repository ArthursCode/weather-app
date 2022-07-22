import React, {useEffect} from "react";
import {useRouter} from "next/router";

const Home: () => void = () => {
    const router = useRouter();

    useEffect(() => {
        router.push('/berlin').then(r => r);
    }, []);
}

export default Home
