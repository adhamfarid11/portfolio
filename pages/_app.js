import "../styles/globals.css";
import myLogo from "../public/Logo.svg";
import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import myImage from "../public/dummy-image.png";

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
            <nav
                className={`nav ${navSticky ? "sticky" : ""} ${
                    navActive ? "unset" : ""
                }`}
            >
                <div className="center">
                    <div className="left">
                        <div className="image-logo">
                            <Image
                                src={myLogo}
                                alt="Adham Farid Logo"
                                width="100%"
                                height="100%"
                                objectFit="fit"
                            />
                        </div>
                        <Link href="/">
                            <a className="text-logo">Adham Farid</a>
                        </Link>
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
                            <p className="desktop">,</p>
                        </div>

                        <div className="menu-item">
                            <Link href="#">Work</Link>
                            <p className="desktop">,</p>
                        </div>

                        <div className="menu-item">
                            <Link href="#">Contact</Link>
                        </div>
                    </div>
                </div>
            </nav>
            <Component {...pageProps} />
        </Fragment>
    );
}

export default MyApp;
