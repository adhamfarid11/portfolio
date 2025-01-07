"use client";
import Head from "next/head";
import { Fragment, useEffect } from "react";

import HomeHero from "./components/home/hero";
import HomeAboutMe from "./components/home/about-me";
import HomeExperience from "./components/home/experience";
import UnderDevelopment from "./components/under-development";

export default function Home() {
    useEffect(() => {
        (async () => {
            const LocomotiveScroll = (await import("locomotive-scroll"))
                .default;
            const locomotiveScroll = new LocomotiveScroll();
        })();
    }, []);

    return (
        <Fragment>
            <Head>
                <title>Adham Farid | Portfolio</title>
                <meta
                    name="description"
                    content="Hi There! I'm Adham Farid and I'm a fresh graduate from Information System at Universitas Indonesia who is extremely determined to learn new things related to business and computer. "
                />
            </Head>
            <HomeHero />
            <HomeAboutMe />
            <HomeExperience />
            {/* <UnderDevelopment /> */}
        </Fragment>
    );
}
