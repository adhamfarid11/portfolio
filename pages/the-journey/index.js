"use client";

import { useEffect, useState } from "react";

import { db } from "../../firebase";
import { collection, getDocs } from "@firebase/firestore";

import Loader from "../components/loader";
import Head from "next/head";

import TheJourney from "pages/components/the-journey/the-journey";

export default function Index() {



    return (
        <>
            <Head>
                <title>Adham Farid | Works</title>
            </Head>
                <>
                    <TheJourney />
                </>
        </>
    );
}
