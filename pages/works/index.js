"use client";

import { useEffect, useLayoutEffect, useState } from "react";

import ReactFullpage from "@fullpage/react-fullpage";

import CustomSwiperSection from "../components/works/CustomSwiperSection";

import { db } from "../../firebase";
import {
    collection,
    getDocs,
    onSnapshot,
    orderBy,
    query,
    startAt,
} from "@firebase/firestore";

import Loader from "../components/loader";
import CarouselWorks from "../components/works/CarouselWorks";
import Head from "next/head";

import WorkSection from "../components/works/WorkSection";
import UnderDevelopment from "pages/components/under-development";

export default function Index() {
    const [datas, setDatas] = useState([]);

    const [isLoading, setIsLoading] = useState(true);

    // Get a list of cities from your database
    async function getCities(db) {
        const citiesCol = collection(db, "works");
        const citySnapshot = await getDocs(citiesCol);
        const cityList = citySnapshot.docs.map((doc) => doc.data());
        // console.log(cityList);
        return cityList;
    }

    async function fetchData() {
        // console.log("fetch data");
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
                <title>Works</title>
            </Head>
            {isLoading ? (
                <>
                    <Loader />
                </>
            ) : (
                <>
                    <UnderDevelopment />
                </>
            )}
        </>
    );
}
