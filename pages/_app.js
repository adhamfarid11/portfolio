import "../styles/globals.css";
import myLogo from "../asset/logo.png";
import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
    const [navActive, setNavActive] = useState(false);
    const [navSticky, setNavSticky] = useState(false);
    const [activeIdx, setAcitveIdx] = useState(0);

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY >= 80) {
            setNavSticky(true);
        } else {
            setNavSticky(false);
        }
    };

    return (
        <Fragment>
            <Head>
                <link rel="icon" type="image/x-icon" href={myLogo} />
                <Script src="../asset/butter.js" />
            </Head>
            <nav className={`nav ${navSticky ? "sticky" : ""}`}>
                <div className="center">
                    <div className="left">
                        <Link href="/">
                            <a className="text-logo">Adham Farid</a>
                        </Link>
                        <div className="image-logo">
                            <Image
                                src={myLogo}
                                width="100%"
                                height="100%"
                                objectFit="contain"
                            />
                        </div>
                    </div>
                    <div
                        className="menu-bar"
                        onClick={() => setNavActive(!navActive)}
                    >
                        <div className={`${navActive ? "active" : ""}`}></div>
                        <div className={`${navActive ? "active" : ""}`}></div>
                    </div>
                    <div className={`menu-list ${navActive ? "active" : ""}`}>
                        <div className="menu-item">
                            <Link href="#">Home</Link>
                        </div>

                        <div className="menu-item">
                            <Link href="#">Work</Link>
                        </div>

                        <div className="menu-item">
                            <Link href="#">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <body
                className={`${navActive ? "disable-scroll" : ""}`}
                id="butter"
            >
                <Component {...pageProps} />
            </body>
        </Fragment>
    );
}

export default MyApp;
