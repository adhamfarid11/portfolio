"use client";

import { useEffect, useState } from "react";

import { db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

import Loader from "../components/loader";
import Head from "next/head";

import UnderDevelopment from "pages/components/under-development";
import TheJourney from "pages/components/works/the-journey";

export default function Index() {
    const [datas, setDatas] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    // Get a list of cities from your database
    async function getCities(db) {
        const citiesCol = collection(db, "works");
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map((doc) => doc.data());
        return cityList;
    }

    async function fetchData() {
        setIsLoading(true);
        try {
            const cityList = await getCities(db);
            console.log(cityList);
            setDatas(cityList);
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    }

    let isInit = false;

    useEffect(() => {
        if (!isInit) {
            isInit = true;
            fetchData();
        }
    }, []);

    return (
        <>
            <Head>
                <title>Adham Farid | Works</title>
            </Head>
            {isLoading ? (
                <>
                    <Loader />
                </>
            ) : (
                <>
                    <TheJourney />
                    {/* <UnderDevelopment /> */}
                </>
            )}
        </>
    );
}
