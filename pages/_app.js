import "../styles/globals.css";
import myLogo from "../asset/logo.png";
import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
            <nav className={`nav ${navSticky ? "sticky" : ""}`}>
                <div className="center">
                    <div className="left">
                        <Link href="/">
                            <a className="text-logo">Adham Farid</a>
                        </Link>
                        <div className="image-logo">
                            <Image
                                src={myLogo}
                                alt="Adham Farid Logo"
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
