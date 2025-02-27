import "../styles/globals.css";
import "../styles/global/footer.scss";
import "../styles/global/form-container.scss";
import "../styles/global/loader.scss";
import "../styles/global/intro.scss";

import "../styles/card.css";
import "../styles/seeMore.css";
import "../styles/admin.scss";
import "../styles/carousel.scss";
import "../styles/contact.scss";
import "../styles/theJourney.scss";
import "../styles/global/swiper-custom.scss";
import "../styles/components/workSectionCard.scss";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/hover-cursor.css";
import "../styles/cursor-custom.css";

import myLogo from "../public/Logo.svg";
import { Fragment, useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";
import { Button, styled, TextField } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import { useWindowSize } from "../hooks/useWindowSize";
import Router from "next/router";
import Loader from "./components/loader";
import Intro from "./components/intro";

import { useUserAgent } from "next-useragent";
import { browserName, browserVersion } from "react-device-detect";

function MyApp({ Component, pageProps }, props) {
    const [navActive, setNavActive] = useState(false);
    const [navSticky, setNavSticky] = useState(false);

    const { width } = useWindowSize();
    const isMobile = width < 768;

    const [loading, setLoading] = useState(false);
    const [isIntroed, setIsIntroed] = useState(true);

    useEffect(() => {
        if (browserName == "Safari") {
            console.log(browserName);
            setIsIntroed(false);
        }
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

    function handleMotionValue() {
        if (isMobile) {
            return 20;
        }
        return 50;
    }

    function handleMotionVariantsAF() {
        if (isMobile) {
            return {
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 5 },
            };
        } else {
            return {
                visible: { opacity: 1, y: 0 },
                hidden: { opacity: 0, y: 30 },
            };
        }
    }

    const StyledTextField = styled(TextField)({
        "& label.Mui-focused": {
            color: "white",
        },
        "& .MuiInput-underline:after": {
            borderBottomColor: "white",
        },
        "& .MuiInputBase-input": {
            backgroundColor: "black",
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: "white",
            },
            "&:hover fieldset": {
                borderColor: "white",
            },
            "&.Mui-focused fieldset": {
                borderColor: "white",
            },
        },
        input: {
            color: "white",
        },
    });

    const ColorButton = styled(Button)(({}) => ({
        color: "black",
        backgroundColor: "white",
        "&:hover": {
            backgroundColor: "rgb(205, 205, 205)",
        },
    }));

    Router.events.on("routeChangeStart", (url) => {
        console.log("Route is changing");
        setLoading(true);
    });
    Router.events.on("routeChangeComplete", (url) => {
        console.log("Route changed");
        setLoading(false);
    });

    function introTimeout() {
        setTimeout(() => {
            setIsIntroed(false);
        }, 3200);
    }

    return (
        <>
            {isIntroed ? (
                <motion.div
                    suppressHydrationWarning={true}
                    initial={{ y: 0 }}
                    animate={{ y: "-100vh" }}
                    transition={{ delay: 2, ease: "easeIn", duration: 1 }}
                >
                    <Intro />
                    {introTimeout()}
                </motion.div>
            ) : (
                <>
                    {loading ? (
                        <Loader />
                    ) : (
                        <>
                            <Head>
                                <meta
                                    name="viewport"
                                    content="width=device-width, initial-scale=1"
                                />
                            </Head>
                            <Fragment>
                                <nav
                                    className={`nav ${
                                        navSticky ? "sticky" : ""
                                    } ${navActive ? "unset" : ""}`}
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
                                                <a className="text-logo">
                                                    Adham Farid
                                                </a>
                                            </Link>
                                        </div>
                                        <div
                                            className="menu-bar"
                                            onClick={() =>
                                                setNavActive(!navActive)
                                            }
                                        >
                                            <div
                                                className={`${
                                                    navActive ? "active" : ""
                                                }`}
                                            ></div>
                                            <div
                                                className={`${
                                                    navActive ? "active" : ""
                                                }`}
                                            ></div>
                                        </div>
                                        <div
                                            className={`menu-list ${
                                                navActive ? "active" : ""
                                            }`}
                                        >
                                            <div className="menu-item">
                                                <Link href="/">Home</Link>
                                                <p className="desktop">,</p>
                                            </div>

                                            <div className="menu-item">
                                                <Link href="/works/">
                                                    Journey
                                                </Link>
                                                <p className="desktop">,</p>
                                            </div>

                                            <div className="menu-item">
                                                <Link href="/contact/">
                                                    Contact
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                                <Component {...pageProps} />

                                <footer>
                                    <div className="footer-form-container">
                                        <motion.div
                                            className="left"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.3,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={{
                                                visible: { opacity: 1, x: 0 },
                                                hidden: {
                                                    opacity: 0,
                                                    x: -handleMotionValue(),
                                                },
                                            }}
                                        >
                                            <div className="upper">
                                                <p>Got some</p>
                                                <div className="words">
                                                    <span>difficult</span>
                                                    <span>impossible</span>
                                                    <span>undoable</span>
                                                    <span>unrealizable</span>
                                                    <span>syulit</span>
                                                    <span>difficult</span>
                                                </div>
                                            </div>
                                            <p>ideas in your mind?</p>
                                        </motion.div>
                                        <motion.div
                                            className="right"
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 0.8,
                                                delay: 0.3,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={{
                                                visible: { opacity: 1, x: 0 },
                                                hidden: {
                                                    opacity: 0,
                                                    x: handleMotionValue(),
                                                },
                                            }}
                                        >
                                            <p>
                                                I won&apos;t do it either but
                                                let me know
                                            </p>
                                            <StyledTextField
                                                fullWidth
                                                input="white"
                                                id="outlined-basic"
                                                label="E-Mail"
                                                variant="outlined"
                                                InputLabelProps={{
                                                    style: { color: "#fff" },
                                                }}
                                            />
                                            <StyledTextField
                                                multiline
                                                fullWidth
                                                rows={3}
                                                input="white"
                                                id="outlined-basic"
                                                label="Message"
                                                variant="outlined"
                                                inputProps={{
                                                    style: { color: "white" },
                                                }}
                                                InputLabelProps={{
                                                    style: { color: "#fff" },
                                                }}
                                            />
                                            <ColorButton
                                                variant="contained"
                                                color="success"
                                                endIcon={<SendIcon />}
                                            >
                                                spam my mail
                                            </ColorButton>
                                        </motion.div>
                                    </div>
                                    <div className="upper">
                                        <motion.span
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.4,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={handleMotionVariantsAF()}
                                        >
                                            A
                                        </motion.span>
                                        <motion.span
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.45,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={handleMotionVariantsAF()}
                                        >
                                            D
                                        </motion.span>
                                        <motion.span
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.5,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={handleMotionVariantsAF()}
                                        >
                                            H
                                        </motion.span>
                                        <motion.span
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.55,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={handleMotionVariantsAF()}
                                        >
                                            A
                                        </motion.span>
                                        <motion.span
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.6,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={handleMotionVariantsAF()}
                                        >
                                            M
                                        </motion.span>
                                        <motion.span
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.65,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={handleMotionVariantsAF()}
                                        >
                                            &nbsp;
                                        </motion.span>
                                        <motion.span
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.7,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={handleMotionVariantsAF()}
                                        >
                                            F
                                        </motion.span>
                                        <motion.span
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.75,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={handleMotionVariantsAF()}
                                        >
                                            A
                                        </motion.span>
                                        <motion.span
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.8,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={handleMotionVariantsAF()}
                                        >
                                            R
                                        </motion.span>
                                        <motion.span
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.85,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={handleMotionVariantsAF()}
                                        >
                                            I
                                        </motion.span>
                                        <motion.span
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true }}
                                            transition={{
                                                duration: 1,
                                                delay: 0.9,
                                                ease: [0, 0.71, 0.2, 1.01],
                                            }}
                                            variants={handleMotionVariantsAF()}
                                        >
                                            D
                                        </motion.span>
                                    </div>
                                    <div className="lower">
                                        <div className="left">
                                            <p>
                                                <strike
                                                    style={{ color: "grey" }}
                                                >
                                                    Not yet a
                                                </strike>{" "}
                                                Software Engineer @ Bank Syariah
                                                Indonesia
                                            </p>
                                        </div>
                                        <div className="mid">
                                            <div className="menu-item">
                                                <Link href="https://github.com/adhamfarid11">
                                                    GitHub
                                                </Link>
                                                <p>,</p>
                                            </div>
                                            <div className="menu-item">
                                                <Link href="https://www.linkedin.com/in/adham-farid-072905191/">
                                                    LinkedIn
                                                </Link>
                                                <p>,</p>
                                            </div>
                                            <div className="menu-item">
                                                <Link href="https://www.instagram.com/adhammfarid/">
                                                    Instagram
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="right">
                                            <p>Designed by Adham Farid</p>
                                            <p>Developed by Adham Farid</p>
                                        </div>
                                    </div>
                                    <div className="desktop">
                                        <div className="copyright">
                                            <p className="desktop">
                                                i kno i dont have any copyright
                                                on dis web but pls dont copy my
                                                design :(
                                            </p>
                                        </div>
                                    </div>
                                </footer>
                            </Fragment>
                        </>
                    )}{" "}
                </>
            )}
        </>
    );
}

export default MyApp;
